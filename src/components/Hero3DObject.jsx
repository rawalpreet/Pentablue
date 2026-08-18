import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);

  // Slowly rotate the mesh
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.2);
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float 
      speed={2} // Animation speed
      rotationIntensity={1} // XYZ rotation intensity
      floatIntensity={2} // Up/down float intensity
      floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within
    >
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <octahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
        
        {/* Inner solid core */}
        <mesh>
          <octahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial 
            color="#8a2be2"
            emissive="#8a2be2"
            emissiveIntensity={0.2}
            roughness={0.4}
            metalness={0.6}
            transmission={0.9} // Glass-like
            thickness={1}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

const Hero3DObject = () => {
  return (
    <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00f0ff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#8a2be2" />
        
        <PresentationControls
          global={false} 
          cursor={true} 
          snap={true} 
          speed={1} 
          zoom={1} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <AbstractShape />
        </PresentationControls>
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00f0ff" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero3DObject;
