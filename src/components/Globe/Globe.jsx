import createGlobe from "cobe";
import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef } from 'react';
import styles from './Globe.module.css'

const Globe = () => {
    const canvasRef = useRef();
    const pointerInteracting = useRef(false);
    const lastX = useRef(0);
    const dragOffset = useRef(0);
    const basePhi = useRef(2);
    const [{ phi }, api] = useSpring(() => ({
        phi: 2,
        config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
    }));

    useEffect(() => {
        let animationFrameId;
        if (!canvasRef.current) return;
        const width = canvasRef.current.clientWidth * 2;  // devicePixelRatio = 2
        const height = canvasRef.current.clientHeight * 2;
        const animate = () => {
            if (!pointerInteracting.current) {
                basePhi.current += 0.003; // Auto-rotate speed
                api.start({ phi: basePhi.current, immediate: false });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate(); // Start animation loop

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width,
            height,
            phi: basePhi.current,
            theta: 0,
            dark: 0.8,
            diffuse: 1.1,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.894, 0.122, 0.149],
            markerColor: [0.8, 0.8, 0.8],
            glowColor: [0.651, 0.032, 0.042],
            markers: [{ location: [205.8038992, -45.560705], size: 0.1 }],
            onRender: (state) => {
                state.phi = phi.get();
            },
        });

        return () => {
            globe.destroy();
            cancelAnimationFrame(animationFrameId);
        };
    }, [api, phi]);


    // const onPointerDown = (e) => {
    //     pointerInteracting.current = true;
    //     lastX.current = e.clientX || (e.touches && e.touches[0].clientX);
    //     dragOffset.current = 0;
    //     if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    // };

    // const onPointerMove = (e) => {
    //     if (!pointerInteracting.current) return;
    //     const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    //     const deltaX = clientX - lastX.current;
    //     lastX.current = clientX;

    //     // Accumulate drag offset scaled for sensitivity
    //     dragOffset.current += deltaX * 0.005;

    //     // Immediately update spring phi for responsive dragging
    //     api.start({ phi: basePhi.current + dragOffset.current, immediate: true });
    // };

    const onPointerMove = (e) => {
        if (!pointerInteracting.current) return;

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const deltaX = clientX - lastX.current;
        lastX.current = clientX;

        // Accumulate drag offset scaled for sensitivity
        dragOffset.current += deltaX * 0.005;

        // Prevent vertical scroll only if significant horizontal movement
        if (Math.abs(deltaX) > Math.abs(clientY - lastY.current || 0)) {
            e.preventDefault();
        }

        lastY.current = clientY;

        // Update globe rotation immediately
        api.start({ phi: basePhi.current + dragOffset.current, immediate: true });
    };

    const lastY = useRef(0);

    const onPointerDown = (e) => {
        pointerInteracting.current = true;
        lastX.current = e.clientX || (e.touches && e.touches[0].clientX);
        lastY.current = e.clientY || (e.touches && e.touches[0].clientY);
        dragOffset.current = 0;
        if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
    };

    const onPointerUpOrLeave = () => {
        if (pointerInteracting.current) {
            pointerInteracting.current = false;
            basePhi.current += dragOffset.current;
            dragOffset.current = 0;

            api.start({ phi: basePhi.current, immediate: false });

            if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }
    };
    return (
        <>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUpOrLeave}
                onPointerLeave={onPointerUpOrLeave}
                onTouchStart={onPointerDown}
                onTouchMove={onPointerMove}
                onTouchEnd={onPointerUpOrLeave}
            />
        </>
    )
}

export default Globe;
