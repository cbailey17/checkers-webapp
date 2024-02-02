// Square.tsx
import React, { useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import Piece from './Piece';

interface SquareProps {
  isDark: boolean;
  hasPiece: boolean;
  onClick: () => void;
  isSelected: boolean;
  position: number;
}

const Square: React.FC<SquareProps> = ({ isDark, hasPiece, onClick, isSelected, position }) => {
  const color = isDark ? '#8B4513' : '#D2B48C'; // Adjust colors as needed
  const meshRef = useRef<THREE.Mesh>();

  useFrame(() => {
    // Rotate the mesh or apply animations if needed
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      position={[position % 8, 0, Math.floor(position / 8)]}
      receiveShadow
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 0.1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
      {hasPiece && (
        <Piece
          position={position}
          isDarkSquare={isDark}
          onClick={onClick}
          isSelected={isSelected}
          isKing={false}
        />
      )}
    </mesh>
  );
};

export default Square;
