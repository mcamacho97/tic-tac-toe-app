import { useState } from "react";

const Square = (props) => {
  const [valueButtonX, setvalueButonX] = useState();

  const ClickButtonHandler = () => {
    setvalueButonX("X");
    console.log(`click in ${props.value}`);
  };

  return (
    <button className="square" onClick={ClickButtonHandler}>
      {valueButtonX}
    </button>
  );
};

export default Square;
