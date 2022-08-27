import Square from "./Square";

const Board = (props) => {

  const renderSquare = (i) => {
    return <Square value={i} />;
  }

  const status = "Next player: X";
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={renderSquare(0)} />
        <Square value={renderSquare(1)} />
        <Square value={renderSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={renderSquare(3)} />
        <Square value={renderSquare(4)} />
        <Square value={renderSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={renderSquare(6)} />
        <Square value={renderSquare(7)} />
        <Square value={renderSquare(8)} />
      </div>
    </div>
  );
};

export default Board;
