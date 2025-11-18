'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial} from '@react-three/drei'
import * as THREE from 'three'

interface GlobeProps {
  className?: string
}

// Animated Globe Sphere Component
const AnimatedGlobe = () => {
  const INITIAL_DISTORT = 0.25
  const meshRef = useRef<THREE.Mesh>(null)
  const [clicked, setClicked] = useState(false)
  const [distort, setDistort] = useState(INITIAL_DISTORT)
  const mousePos = useRef(new THREE.Vector2(0, 0))
  const intersectionPoint = useRef(new THREE.Vector3())
  
  // Track mouse position
  useFrame((state) => {
    if (meshRef.current) {
      // Auto-rotate the globe slowly
      meshRef.current.rotation.y += 0.0005
      
      // Update mouse position for interaction
      mousePos.current.x = state.mouse.x
      mousePos.current.y = state.mouse.y
      
      // If hovered, increase distortion
      if (clicked) {
        setDistort(prev => THREE.MathUtils.lerp(prev, 1, 0.1))
      } else {
        setDistort(prev => THREE.MathUtils.lerp(prev, INITIAL_DISTORT, 0.1))
      }
    }
  })

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 64, 64]}
      onPointerDown={(e) => {
        e.stopPropagation()
        setClicked(true)
        document.body.style.cursor = 'pointer'
        if (e.point && clicked) {
          intersectionPoint.current.copy(e.point)
        }
      }}
      onPointerUp={(e) => {
        e.stopPropagation()
        setClicked(false)
        document.body.style.cursor = 'default'
      }}
    >
      <MeshDistortMaterial
        color={ "#e78a53"}
        attach="material"
        distort={distort}
        speed={ 1.5}
        roughness={0.4}
        metalness={0}
      />
    </Sphere>
  )
}

export const Globe: React.FC<GlobeProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0,0,2], fov: 100, zoom: 1}}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* <pointLight position={[0, 0, -5]} intensity={10} color="#4f46e5" />  */}
        
        <AnimatedGlobe />
        
        {/* OrbitControls for mouse interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={2}
          maxDistance={5}
          enableRotate={true}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

