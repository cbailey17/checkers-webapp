import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Board from './Board';
// import Piece from './Piece';
// import Square from './Square';

type Bitboards = {
  whitePieces: number;
  blackPieces: number;
  kings: number;
};

const CheckersGame: React.FC = () => {
  // const [bitboards, setBitboards] = useState<Bitboards>(initializeBitboards());
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  const handleSquareClick = (square: number) => {
    console.log(`Clicked on square ${square}`);
    setSelectedSquare(square);
  };

  return (
    <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Board
        onSquareClick={handleSquareClick}
        selectedSquare={selectedSquare}
      />
      <OrbitControls />
    </Canvas>
  );
};

export default CheckersGame;


// Helper function to initialize the bitboards
const initializeBitboards = (): Bitboards => {
  const emptyBoard = 0b00000000_00000000_00000000_00000000_00000000_00000000_00000000_00000000;
  const whitePiecesBoard = 0b10101010_01010101_10101010_00000000_00000000_00000000_00000000_00000000;
  const blackPiecesBoard = 0b00000000_00000000_00000000_00000000_00000000_10101010_01010101_10101010;
  const kingsBoard = emptyBoard;

  return {
    whitePieces: whitePiecesBoard,
    blackPieces: blackPiecesBoard,
    kings: kingsBoard,
  };
};

// Helper function to check if a square contains a piece
const isPiece = (board: number, square: number): boolean => {
  return (BigInt(board) & (1n << BigInt(square))) !== 0n;
};

// Helper function to move a piece on the bitboard
const movePiece = (board: number, fromSquare: number, toSquare: number): number => {
  const movedPiece = BigInt(board) & (1n << BigInt(fromSquare));
  const clearedFromSquare = BigInt(board) & ~(1n << BigInt(fromSquare));
  const newBoard = clearedFromSquare | (movedPiece << BigInt(toSquare));
  return Number(newBoard);
};
