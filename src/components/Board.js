import Square from "./Square";

const Board = (props) => {
  const status = "Next player: X";
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={9} />
      </div>
    </div>
  );
};

export default Board;
