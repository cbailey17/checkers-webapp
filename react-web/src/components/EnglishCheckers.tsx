/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 english_checkers.glb -t 
Author: Marsoft (https://sketchfab.com/bear59814)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/english-checkers-2b526bcb7dee452b95172e37ca9b86a3
Title: English checkers
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
  }
  materials: {
    ['113_0']: THREE.MeshStandardMaterial
    ['56_0']: THREE.MeshStandardMaterial
    ['51_0']: THREE.MeshStandardMaterial
    ['73_0']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function EnglishCheckers(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/english_checkers.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 185.55, 165.45]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['113_0']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['113_0']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['56_0']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['51_0']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['73_0']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['73_0']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/english_checkers.glb')
