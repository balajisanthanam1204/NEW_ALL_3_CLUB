import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Cylinder() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Create a simple gradient texture
  const createGradientTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#a855f7');
    gradient.addColorStop(0.5, '#ec4899');
    gradient.addColorStop(1, '#8b5cf6');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Add some visual interest
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const radius = Math.random() * 30;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[2, 2, 1.5, 64, 1, true]} />
      <meshStandardMaterial
        ref={materialRef}
        map={createGradientTexture()}
        side={THREE.DoubleSide}
        metalness={0.8}
        roughness={0.2}
        emissive="#a855f7"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Silhouettes() {
  const positions = [
    [-4, -1.5, 0],
    [-3.5, -1.5, -2],
    [3.5, -1.5, 0],
    [4, -1.5, -1.5],
    [0, -1.5, 3.5],
  ];

  return (
    <>
      {positions.map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]}>
          <capsuleGeometry args={[0.3, 1, 8, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          color="#8b5cf6"
          castShadow
        />
        <Cylinder />
        <Silhouettes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
