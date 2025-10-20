"use client";
import { useState } from "react";
import Square from "../components/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: Array<string | null>) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (position: number) => {
    if (winner || squares[position]) return;

    const squaresCopy = [...squares];
    squaresCopy[position] = currentPlayer;
    setSquares(squaresCopy);

    const gameWinner = calculateWinner(squaresCopy);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random()) === 1 ? "X" : "O");
  };

  return (
    <div className="text-center mt-12">
      {winner ? (
        <p className="text-xl font-bold mb-4">Winner is: {winner}! 🎉</p>
      ) : (
        <p className="text-xl mb-4">Hey {currentPlayer}, it&apos;s your turn</p>
      )}

      <div className="grid grid-cols-3 gap-2 p-2 max-w-[300px] mx-auto">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;