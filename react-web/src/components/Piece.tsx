// Piece.tsx
import React from 'react';
import { Cylinder } from '@react-three/drei';

interface PieceProps {
  position: number;
  onClick: () => void;
  isSelected: boolean;
  isKing: boolean;
}

const Piece: React.FC<PieceProps> = ({ position, onClick, isSelected = false, isKing = false }) => {
  const isWhitePiece = Math.floor(position / 8) < 3;
  const pieceColor = isKing ? 'gold' : isWhitePiece ? 'white' : 'black';

  console.log(`position: ${position}`);  

  return (
    <mesh onClick={onClick} position={[position % 8, 0.2, position / 8]}> 
      <Cylinder scale={[1, 1, 1]} args={[0.45, 0.45, 0.2, 32]} receiveShadow castShadow> 
        <meshStandardMaterial color={isSelected ? '#D4FF32' : pieceColor} />
      </Cylinder>
    </mesh>
  );
};

export default Piece;