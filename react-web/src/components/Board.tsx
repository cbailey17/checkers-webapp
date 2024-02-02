// Board.tsx
import React from 'react';
import Square from './Square';

interface BoardProps {
  onSquareClick: (square: number) => void;
  selectedSquare: number | null;
}

const Board: React.FC<BoardProps> = ({ onSquareClick, selectedSquare }) => {
  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const position = row * 8 + col;
        const isDarkSquare = (row + col) % 2 === 1;

        squares.push(
          <Square
            key={position}
            position={position}
            isDark={isDarkSquare}
            hasPiece={true} // You can conditionally set this based on your logic
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
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[8, 8]} />
        <meshStandardMaterial attach="material" color={'#d3d3d3'} />
      </mesh>
      {renderSquares()}
    </group>
  );
};

export default Board;
