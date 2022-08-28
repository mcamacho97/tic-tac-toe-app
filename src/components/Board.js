import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const HandleClick = (i) => {
    const squares = board.squares.slice();
    squares[i] = board.xIsNext ? "X" : "O";
    setBoard({ squares: squares, xIsNext: !board.xIsNext });
    console.log("In Board Component " + squares);
  };

  const RenderSquare = (i) => {
    return <Square value={board.squares[i]} onClick={() => HandleClick(i)} />;
  };

  const status = "Next player: X";

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
