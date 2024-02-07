// Square.tsx
import React from 'react';
import Piece from './Piece';

interface SquareProps {
  isDark: boolean;
  hasPiece: boolean;
  onClick: () => void;
  isSelected: boolean;
  position: number;
}

const Square: React.FC<SquareProps> = ({ isDark, hasPiece, onClick, isSelected, position }) => {
  const color = isDark ? '#8B4513' : '#D2B48C';

  console.log(`position: ${position}`);
  
  return (
    <group position={[position % 8 - 3.5, 0, Math.floor(position / 8) - 3.5]}>
      <mesh onClick={onClick} receiveShadow castShadow>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hasPiece && (
        <Piece
          position={position}
          onClick={onClick}
          isSelected={isSelected}
          isKing={false}
        />
      )}
    </group>
  );
};

export default Square;
