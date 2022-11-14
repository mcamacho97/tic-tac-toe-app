import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const ClickSquareHandler = (i) => {
    const squares = board.squares.slice();

    if (CalculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = board.xIsNext ? "X" : "O";
    setBoard({ squares: squares, xIsNext: !board.xIsNext });
    //console.log("In Board Component " + squares);
  };

  const RenderSquare = (i) => {
    return (
      <Square value={board.squares[i]} onClick={() => ClickSquareHandler(i)} />
    );
  };

  const CalculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = CalculateWinner(board.squares);
  let status;

  if (winner) {
    status = `Winner ${winner}`;
  }else {
    status =  `Next player: ${board.xIsNext ? "X" : "O"}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};

export default Board;