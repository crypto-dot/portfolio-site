'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial} from '@react-three/drei'
import * as THREE from 'three'

interface GlobeProps {
  className?: string
}

// Animated Globe Sphere Component
const AnimatedGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
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
      
      // If hovered, increase distortion at intersection point
      if (materialRef.current && hovered) {
        console.log('hovered')
        materialRef.current.distort = THREE.MathUtils.lerp(
          materialRef.current.distort,
          1,
          0.1
        )
        }   
        //  else if (materialRef.current) {
        //     materialRef.current.distort = THREE.MathUtils.lerp(
        //     materialRef.current.distort,
        //     0.5,
        //     0.01
        //     )
        // }
    }
  })

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 64, 64]}
      onPointerDown={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
        if (e.point && hovered) {
          intersectionPoint.current.copy(e.point)
        }
      }}
      onPointerUp={(e) => {
        e.stopPropagation()
        setHovered(false)
        document.body.style.cursor = 'default'
      }}
      onPointerMove={(e) => {
        e.stopPropagation()
        if (e.point) {
          intersectionPoint.current.copy(e.point)
        }
      }}
    >
      <MeshDistortMaterial
        ref={materialRef}
        color={ "#e78a53"}
        attach="material"
        distort={0.35}
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

