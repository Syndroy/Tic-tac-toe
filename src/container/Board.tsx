"use client";
import { useState } from "react";
import Square from "../components/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);
  return (
    <div className="text-center mt-12 ">
      <p>Hey {currentPlayer}, its your turn</p>

      <div className="border-2 border-red-500 grid grid-cols-3 justify-items-center mt-2">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>

    </div>
  );
}

export default Board;
