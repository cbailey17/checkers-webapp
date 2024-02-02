import React from 'react';
import { Cylinder } from '@react-three/drei';

interface PieceProps {
  position: number;
  isDarkSquare: boolean;
  onClick: () => void;
  isSelected: boolean;
  isKing: boolean;
}

const Piece: React.FC<PieceProps> = ({ position, isDarkSquare, onClick, isSelected = false, isKing = false }) => {
  const pieceColor = isKing ? 'gold' : isDarkSquare ? 'black' : 'white';

  return (
    <mesh onClick={onClick} position={[position % 8, 0.5, Math.floor(position / 8)]} castShadow>
      <Cylinder args={[0.4, 0.4, 0.2, 32]} receiveShadow castShadow>
        <meshStandardMaterial color={isSelected ? 'yellow' : pieceColor} />
      </Cylinder>
    </mesh>
  );
};

export default Piece;
