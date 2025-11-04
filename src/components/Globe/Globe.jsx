import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { GradientTexture } from '@react-three/drei';
import * as THREE from "three";
import gsap from "gsap";

const defaultColorA = new THREE.Color(0.894, 0.122, 0.149);  // Blue shade
const defaultColorB = new THREE.Color(0.408, 0.004, 0.02);

const highlightColorA = new THREE.Color(1, 1, 1);  // White
const highlightColorB = new THREE.Color(1, 1, 1);

const initialRotationY = -230 * (Math.PI / 180);

// Vertex Shader
const vertexShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  uniform float u_time;
  uniform float u_maxExtrusion;
  void main() {
    vec3 newPosition = position;
    if(u_maxExtrusion > 1.0) newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(u_time);
    else newPosition.xyz = newPosition.xyz * u_maxExtrusion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
`;

// Fragment Shader
const fragmentShader = `
  #ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 regionColor;
uniform bool isHighlight;

void main() {
  float pct = abs(sin(u_time));
  vec3 baseColor = mix(colorA, colorB, pct);
  vec3 finalColor = isHighlight ? regionColor : baseColor;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;
// Convert lat/lon to 3D sphere coords
const calcPosFromLatLonRad = (lon, lat, radius = 20) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
};

const processImageData = (imageData, width, height) => {
    const activeLatLon = {};
    for (let i = 0, lon = -180, lat = 90; i < imageData.length; i += 4, lon++) {
        if (!activeLatLon[lat]) activeLatLon[lat] = [];
        const red = imageData[i];
        const green = imageData[i + 1];
        const blue = imageData[i + 2];
        if (red < 80 && green < 80 && blue < 80) {
            activeLatLon[lat].push(lon);
        }
        if (lon === 180) {
            lon = -180;
            lat--;
        }
    }
    return activeLatLon;
};

const visibilityForCoordinate = (lon, lat, activeLatLon) => {
    if (!activeLatLon[lat] || !activeLatLon[lat].length) return false;
    const closest = activeLatLon[lat].reduce((prev, curr) => {
        return Math.abs(curr - lon) < Math.abs(prev - lon) ? curr : prev;
    });
    return Math.abs(lon - closest) < 0.5;
};

const shaderMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
        u_time: { value: 0 },
        u_maxExtrusion: { value: 1.0 },
        regionColor: { value: new THREE.Color('#ffffff') } // default white
    },
    vertexShader,
    fragmentShader,
});

function Globe({ imageUrl = "/world_alpha_mini.jpg" }) {
    const groupRef = useRef();
    const baseMeshRef = useRef();
    const [dots, setDots] = useState([]);
    const [materials, setMaterials] = useState([]);
    const { camera } = useThree();
    const raycaster = useRef(new THREE.Raycaster());
    const mouse = useRef(new THREE.Vector2());
    const isIntersecting = useRef(false);
    const mouseDown = useRef(false);
    const minMouseDownFlag = useRef(false);
    const grabbing = useRef(false);

    // Load image and create dots
    useEffect(() => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const activeLatLon = processImageData(imageData.data, canvas.width, canvas.height);
            const dotDensity = 1.5;
            const dotSphereRadius = 30;
            const newDots = [];
            const newMaterials = [];
            for (let lat = 90, i = 0; lat > -90; lat--, i++) {
                const radius = Math.cos(Math.abs(lat) * (Math.PI / 180)) * dotSphereRadius;
                const circumference = radius * Math.PI * 2;
                const dotsForLat = circumference * dotDensity;
                for (let x = 0; x < dotsForLat; x++) {
                    const long = -180 + (x * 360) / dotsForLat;
                    if (!visibilityForCoordinate(long, lat, activeLatLon)) continue;
                    const vector = calcPosFromLatLonRad(long, lat, dotSphereRadius);

                    // Highlight Australia
                    const isAustralia = lat <= -10 && lat >= -44 && long >= 113 && long <= 154;

                    // Change material color if in Australia
                    const mat = new THREE.ShaderMaterial({
                        side: THREE.DoubleSide,
                        uniforms: {
                            u_time: { value: i * Math.sin(Math.random()) },
                            u_maxExtrusion: { value: 1.0 },
                            colorA: { value: defaultColorA },
                            colorB: { value: defaultColorB },
                            regionColor: { value: highlightColorA },
                            isHighlight: { value: isAustralia },
                        },
                        vertexShader,
                        fragmentShader,
                    });
                    newMaterials.push(mat);
                    newDots.push({ position: vector, materialIndex: newMaterials.length - 1 });
                }
            }

            setDots(newDots);
            setMaterials(newMaterials);
        };
        image.onerror = () => {
            console.error("Failed to load world map image");
        };
        image.src = imageUrl;
    }, [imageUrl]);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
        }
        materials.forEach((mat) => {
            mat.uniforms.u_time.value += 0.03;
        });
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.current.setFromCamera(mouse.current, camera);
            if (baseMeshRef.current) {
                const intersects = raycaster.current.intersectObject(baseMeshRef.current);
                isIntersecting.current = intersects.length > 0;
                if (isIntersecting.current && !grabbing.current) {
                    document.body.style.cursor = "pointer";
                } else if (!grabbing.current) {
                    document.body.style.cursor = "default";
                }
            }
        };
        const handleMouseDown = () => {
            if (!isIntersecting.current) return;
            materials.forEach((mat) => {
                gsap.to(mat.uniforms.u_maxExtrusion, { value: 1.07 });
            });
            mouseDown.current = true;
            minMouseDownFlag.current = false;
            setTimeout(() => {
                minMouseDownFlag.current = true;
                if (!mouseDown.current) handleMouseUp();
            }, 500);
            document.body.style.cursor = "grabbing";
            grabbing.current = true;
        };
        const handleMouseUp = () => {
            mouseDown.current = false;
            if (!minMouseDownFlag.current) return;
            materials.forEach((mat) => {
                gsap.to(mat.uniforms.u_maxExtrusion, { value: 1.0, duration: 0.15 });
            });
            grabbing.current = false;
            if (isIntersecting.current) document.body.style.cursor = "pointer";
            else document.body.style.cursor = "default";
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "default";
        };
    }, [camera, materials]);

    if (dots.length === 0) {
        return null;
    }

    return (
        <group ref={groupRef} rotation={[0, initialRotationY, 0]}>
            {/* Base sphere */}
            <mesh ref={baseMeshRef}>
                <sphereGeometry args={[30, 64, 64]} />
                <meshStandardMaterial
                    color="#88202f"
                    transparent
                    opacity={1}
                />
            </mesh>
            {/* Dots */}
            {dots.map((dot, i) => (
                <mesh key={i} position={[dot.position.x, dot.position.y, dot.position.z]}>
                    <circleGeometry args={[0.15, 5]} />
                    <primitive object={materials[dot.materialIndex]} attach="material" />
                </mesh>
            ))}
        </group>
    );
}

export default Globe;
