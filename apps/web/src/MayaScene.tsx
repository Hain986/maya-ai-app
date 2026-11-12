import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense } from 'react';

function MayaAvatar() {
  return (
    <group position={[0, -0.8, 0]}>
      <mesh position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial color="#f3d7c6" />
      </mesh>

      <mesh position={[0, 1.8, 0.48]} castShadow>
        <sphereGeometry args={[0.16, 20, 20]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>

      <mesh position={[0, 1.85, 0.52]} castShadow>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[-0.18, 1.62, 0.48]} castShadow>
        <sphereGeometry args={[0.05, 20, 20]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>

      <mesh position={[0.18, 1.62, 0.48]} castShadow>
        <sphereGeometry args={[0.05, 20, 20]} />
        <meshStandardMaterial color="#0b1020" />
      </mesh>

      <mesh position={[0, 1.35, 0.52]} castShadow>
        <boxGeometry args={[0.18, 0.08, 0.04]} />
        <meshStandardMaterial color="#f7a0b5" />
      </mesh>

      <mesh position={[0, 2.1, 0]} castShadow>
        <sphereGeometry args={[0.46, 32, 32]} />
        <meshStandardMaterial color="#d9a2dd" />
      </mesh>

      <mesh position={[0, 1.1, 0]} castShadow>
        <capsuleGeometry args={[0.42, 1.1, 10, 20]} />
        <meshStandardMaterial color="#8f98ff" />
      </mesh>

      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.65, 0.75, 0.8, 32]} />
        <meshStandardMaterial color="#f3d7c6" />
      </mesh>
    </group>
  );
}

export function MayaScene() {
  return (
    <Canvas camera={{ position: [0, 1.3, 4.3], fov: 36 }}>
      <ambientLight intensity={1.6} />
      <directionalLight position={[3, 4, 4]} intensity={1.8} />
      <pointLight position={[-3, 2, 2]} intensity={1.2} color="#f5b0ff" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.7}>
          <MayaAvatar />
        </Float>
      </Suspense>
    </Canvas>
  );
}
