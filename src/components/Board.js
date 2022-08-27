import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  

  const handleClick = (i) => {
    const squareClick = squares.slice();
    squareClick[i] = 'X';
    setSquares(squareClick);
    console.log('In Board Component')
  }

  const RenderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
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
