/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 checker.glb -t 
Author: AnshiNoWara NG+ (https://sketchfab.com/Anshinowara2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/checker-board-d9476918d96241ebb9d1f36274e28211
Title: Checker Board
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Board_Board_0: THREE.Mesh
    Red_Red_0: THREE.Mesh
    Red001_Red_0: THREE.Mesh
    Red002_Red_0: THREE.Mesh
    Red003_Red_0: THREE.Mesh
    Red004_Red_0: THREE.Mesh
    Red005_Red_0: THREE.Mesh
    Red006_Red_0: THREE.Mesh
    Red007_Red_0: THREE.Mesh
    Red008_Red_0: THREE.Mesh
    Red009_Red_0: THREE.Mesh
    Red010_Red_0: THREE.Mesh
    Red011_Red_0: THREE.Mesh
    Black001_Black_0: THREE.Mesh
    Black002_Black_0: THREE.Mesh
    Black003_Black_0: THREE.Mesh
    Black004_Black_0: THREE.Mesh
    Black005_Black_0: THREE.Mesh
    Black006_Black_0: THREE.Mesh
    Black007_Black_0: THREE.Mesh
    Black008_Black_0: THREE.Mesh
    Black009_Black_0: THREE.Mesh
    Black010_Black_0: THREE.Mesh
    Black011_Black_0: THREE.Mesh
    Black_Black_0: THREE.Mesh
  }
  materials: {
    Board: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Checker(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/checker.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Board_Board_0.geometry} material={materials.Board} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red_Red_0.geometry} material={materials.material} position={[184.599, 38.35, 258.436]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red001_Red_0.geometry} material={materials.material} position={[36.946, 38.35, 258.436]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red002_Red_0.geometry} material={materials.material} position={[-110.762, 38.35, 258.436]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red003_Red_0.geometry} material={materials.material} position={[-258.421, 38.35, 258.436]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red004_Red_0.geometry} material={materials.material} position={[-184.559, 38.35, 184.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red005_Red_0.geometry} material={materials.material} position={[-36.896, 38.35, 184.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red006_Red_0.geometry} material={materials.material} position={[110.774, 38.35, 184.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red007_Red_0.geometry} material={materials.material} position={[258.447, 38.35, 184.586]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red008_Red_0.geometry} material={materials.material} position={[184.627, 38.35, 110.744]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red009_Red_0.geometry} material={materials.material} position={[36.944, 38.35, 110.744]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red010_Red_0.geometry} material={materials.material} position={[-110.726, 38.35, 110.744]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Red011_Red_0.geometry} material={materials.material} position={[-258.406, 38.35, 110.744]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        {/* <mesh geometry={nodes.Black001_Black_0.geometry} material={materials.Black} position={[-184.577, 38.35, -258.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100} /> */}
        <mesh geometry={nodes.Black002_Black_0.geometry} material={materials.Black} position={[-36.925, 38.35, -258.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black003_Black_0.geometry} material={materials.Black} position={[110.783, 38.35, -258.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black004_Black_0.geometry} material={materials.Black} position={[258.443, 38.35, -258.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black005_Black_0.geometry} material={materials.Black} position={[184.581, 38.35, -184.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black006_Black_0.geometry} material={materials.Black} position={[36.918, 38.35, -184.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black007_Black_0.geometry} material={materials.Black} position={[-110.753, 38.35, -184.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black008_Black_0.geometry} material={materials.Black} position={[-258.425, 38.35, -184.591]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black009_Black_0.geometry} material={materials.Black} position={[-184.606, 38.35, -110.748]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black010_Black_0.geometry} material={materials.Black} position={[-36.922, 38.35, -110.748]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black011_Black_0.geometry} material={materials.Black} position={[110.748, 38.35, -110.748]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Black_Black_0.geometry} material={materials.Black} position={[258.427, 38.35, -110.748]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/checker.glb')
