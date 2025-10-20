import React from 'react'
interface SquareProps {
  value: string | null;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="w-20 h-20 border-2 border-gray-400 text-4xl font-bold flex items-center justify-center hover:bg-gray-100"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;