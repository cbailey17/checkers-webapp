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
    <mesh onClick={onClick} position={[position % 8 - 3.5, 0.2, Math.floor(position / 8) - 3.5]}> {/* Adjusted Y position for better visibility */}
      <Cylinder scale={[1, 1, 1]} args={[0.45, 0.45, 0.2, 32]} receiveShadow castShadow> {/* Adjust the scale of the piece */}
        <meshStandardMaterial color={isSelected ? 'yellow' : pieceColor} />
      </Cylinder>
    </mesh>
  );
};

export default Piece;