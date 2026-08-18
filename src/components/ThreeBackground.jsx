import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// A slow-rotating wireframe globe in the deep background
const BackgroundGlobe = () => {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -15]}>
      <icosahedronGeometry args={[10, 2]} />
      <meshBasicMaterial 
        color="#8a2be2" 
        wireframe={true} 
        transparent={true} 
        opacity={0.15} 
      />
    </mesh>
  );
};

// Subtle camera sway to make the stars feel alive
const CameraRig = () => {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.5;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#07070a']} />
        
        <CameraRig />
        
        {/* Dense, slowly drifting starfield */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <BackgroundGlobe />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
