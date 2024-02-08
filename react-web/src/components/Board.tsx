// Board.tsx
import React from 'react';
import Square from './Square';
import { Bitboards } from './CheckersGame'; 
import { Point, Points } from '@react-three/drei';
// import { Instances } from '@react-three/drei';

interface BoardProps {
  onSquareClick: (square: number) => void;
  selectedSquare: number | null;
  pieces: Bitboards
}

const Board: React.FC<BoardProps> = ({ onSquareClick, selectedSquare }) => {
  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const position = row * 8 + col;
        const isDarkSquare = (row + col) % 2 === 1;

        const hasPiece =
          (row < 3 && (row + col) % 2 === 1) || (row > 4 && (row + col) % 2 === 1);

        squares.push(
          <Square
            key={position}
            position={position}
            isDark={isDarkSquare}
            hasPiece={hasPiece}
            onClick={() => onSquareClick(position)}
            isSelected={selectedSquare !== null && selectedSquare === position}
          />
        );
      }
    }

    return squares;
  };

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry attach="geometry" args={[8, 8]} />
        <meshStandardMaterial attach="material" color={'#d3d3d3'} />
      </mesh>
      {renderSquares()}
    </group>
  );
};

export default Board;
