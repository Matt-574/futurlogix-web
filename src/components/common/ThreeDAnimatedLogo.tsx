import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  modelPath: string;
}

const Model: React.FC<ModelProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Simple rotation animation
    }
  });

  return <primitive object={scene} ref={ref} scale={0.5} />; // Adjust scale as needed
};

interface ThreeDAnimatedLogoProps {
  modelPath?: string;
}

const ThreeDAnimatedLogo: React.FC<ThreeDAnimatedLogoProps> = ({ modelPath = '/futurlogix_logo_3d.glb' }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model modelPath={modelPath} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeDAnimatedLogo;
