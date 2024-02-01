/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 game_of_checkers.glb -t 
Author: Connections XR (https://sketchfab.com/connectionsxr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/game-of-checkers-9159441882944dadb0ace1e244e8ec3c
Title: Game of Checkers
*/

import * as THREE from '../../node_modules/@types/three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

type GLTFResult = GLTF & {
  nodes: {
    polySurface1_Red_0: THREE.Mesh
    polySurface2_Red_0: THREE.Mesh
    polySurface3_Red_0: THREE.Mesh
    polySurface4_Red_0: THREE.Mesh
    polySurface5_Red_0: THREE.Mesh
    polySurface6_Red_0: THREE.Mesh
    polySurface7_Red_0: THREE.Mesh
    polySurface8_black_0: THREE.Mesh
    polySurface9_black_0: THREE.Mesh
    polySurface10_black_0: THREE.Mesh
    polySurface11_black_0: THREE.Mesh
    polySurface12_black_0: THREE.Mesh
    polySurface13_black_0: THREE.Mesh
    polySurface14_black_0: THREE.Mesh
    polySurface15_black_0: THREE.Mesh
    polySurface16_Red_0: THREE.Mesh
    polySurface17_black_0: THREE.Mesh
    polySurface18_black_0: THREE.Mesh
    polySurface19_Red_0: THREE.Mesh
    polySurface20_Red_0: THREE.Mesh
    polySurface21_Red_0: THREE.Mesh
    polySurface22_Red_0: THREE.Mesh
    polySurface23_black_0: THREE.Mesh
    polySurface24_black_0: THREE.Mesh
    polySurface25_board_0: THREE.Mesh
    polySurface25_board_0_1: THREE.Mesh
    polySurface25_board_0_2: THREE.Mesh
    polySurface25_board_0_3: THREE.Mesh
    polySurface25_board_0_4: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    board: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Take 001'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function CheckerBoard(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const tl = useRef();

  const { nodes, materials, animations } = useGLTF('/models/game_of_checkers.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.59, 0.03, -0.869]} scale={0.007}>
          <group name="925002f7bc5c4ce9a4ad535747bbde2dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="IFD_CheckerBoardWithChecker_HR_GeometryIFD_BlackPiece_HoleFix_0">
                  <group name="polySurface1" position={[-422, 112.047, 478]}>
                    <mesh name="polySurface1_Red_0" geometry={nodes.polySurface1_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface2" position={[-377, 110.047, 564]}>
                    <mesh name="polySurface2_Red_0" geometry={nodes.polySurface2_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface3" position={[-422, 110.047, 563]}>
                    <mesh name="polySurface3_Red_0" geometry={nodes.polySurface3_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface4" position={[-411, 112.051, 435]}>
                    <mesh name="polySurface4_Red_0" geometry={nodes.polySurface4_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface5" position={[-453, 110.047, 435]}>
                    <mesh name="polySurface5_Red_0" geometry={nodes.polySurface5_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface6" position={[-451, 111.047, 348]}>
                    <mesh name="polySurface6_Red_0" geometry={nodes.polySurface6_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface7" position={[-406, 111.047, 390]}>
                    <mesh name="polySurface7_Red_0" geometry={nodes.polySurface7_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface8" position={[-303, 112.207, 609]}>
                    <mesh name="polySurface8_black_0" geometry={nodes.polySurface8_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface9" position={[116, 132, 520]}>
                    <mesh name="polySurface9_black_0" geometry={nodes.polySurface9_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface10" position={[115, 113, 482]}>
                    <mesh name="polySurface10_black_0" geometry={nodes.polySurface10_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface11" position={[116, 114, 566]} rotation={[-0.007, -0.01, -0.012]}>
                    <mesh name="polySurface11_black_0" geometry={nodes.polySurface11_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface12" position={[-83, 116, 565]}>
                    <mesh name="polySurface12_black_0" geometry={nodes.polySurface12_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface13" position={[140, 112.207, 523]}>
                    <mesh name="polySurface13_black_0" geometry={nodes.polySurface13_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface14" position={[-124, 114.207, 604]}>
                    <mesh name="polySurface14_black_0" geometry={nodes.polySurface14_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface15" position={[90, 113.207, 525]}>
                    <mesh name="polySurface15_black_0" geometry={nodes.polySurface15_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface16" position={[-374, 110.051, 457]}>
                    <mesh name="polySurface16_Red_0" geometry={nodes.polySurface16_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface17" position={[-258, 114.207, 481]}>
                    <mesh name="polySurface17_black_0" geometry={nodes.polySurface17_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface18" position={[161, 115.207, 482]}>
                    <mesh name="polySurface18_black_0" geometry={nodes.polySurface18_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface19" position={[-391, 111.051, 512]}>
                    <mesh name="polySurface19_Red_0" geometry={nodes.polySurface19_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface20" position={[-398, 131, 481]}>
                    <mesh name="polySurface20_Red_0" geometry={nodes.polySurface20_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface21" position={[-457, 112.047, 392]}>
                    <mesh name="polySurface21_Red_0" geometry={nodes.polySurface21_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface22" position={[-461, 111.051, 520]}>
                    <mesh name="polySurface22_Red_0" geometry={nodes.polySurface22_Red_0.geometry} material={materials.material} />
                  </group>
                  <group name="polySurface23" position={[-82, 113.207, 393]}>
                    <mesh name="polySurface23_black_0" geometry={nodes.polySurface23_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface24" position={[-215, 114.207, 436]}>
                    <mesh name="polySurface24_black_0" geometry={nodes.polySurface24_black_0.geometry} material={materials.black} />
                  </group>
                  <group name="polySurface25">
                    <mesh name="polySurface25_board_0" geometry={nodes.polySurface25_board_0.geometry} material={materials.board} />
                    <mesh name="polySurface25_board_0_1" geometry={nodes.polySurface25_board_0_1.geometry} material={materials.board} />
                    <mesh name="polySurface25_board_0_2" geometry={nodes.polySurface25_board_0_2.geometry} material={materials.board} />
                    <mesh name="polySurface25_board_0_3" geometry={nodes.polySurface25_board_0_3.geometry} material={materials.board} />
                    <mesh name="polySurface25_board_0_4" geometry={nodes.polySurface25_board_0_4.geometry} material={materials.board} />
                  </group>
                  <group name="transform1" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/game_of_checkers.glb')