import React from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const SkillSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[Math.PI / 2, 0, 0]}>
        <OrbitControls />
            <sphereGeometry radius={10} segments={32} />
            <meshStandardMaterial  metalness={1}  roughness={0} transparent={true} opacity={0.5} />
        </mesh>
    </Canvas>
  )
}