const Square = (props) => {
  const ClickButtonHandler = () => {
    console.log(`click in ${props.value}`);
  };

  return (
    <button className="square" onClick={ClickButtonHandler}>
      {props.value}
    </button>
  );
};

export default Square;
