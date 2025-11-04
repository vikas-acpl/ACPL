import React, { memo } from 'react';
import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "../../components/Globe/Globe";

const GlobeScene = memo(() => {
  const { invalidate } = useThree();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Globe imageUrl="/world_alpha_mini.jpg" />
      <OrbitControls
        onChange={invalidate}
        autoRotate
        autoRotateSpeed={3}  // Reduced from 5
        enableDamping
        dampingFactor={0.05}
        enableRotate
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </>
  );
});

const MapRightSide = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="w-[400px] h-[400px] mt-12 md:mt-0"  // Reduced from 500px
  >
    <Canvas
      camera={{ position: [0, 0, 150], fov: 30, near: 0.1, far: 1000 }}
      gl={{ 
        antialias: false,  // KEY: Stripe's optimization
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 1.5]}  // Limit pixel ratio
      frameloop="demand"  // Only render on demand
    >
      <GlobeScene />
    </Canvas>
  </motion.div>
));

export default MapRightSide;
