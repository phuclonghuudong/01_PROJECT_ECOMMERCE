import React, { useState } from "react";

const GroupQuantity = () => {
  const [number, setNumber] = useState(1);

  const onclickSubtraction = () => {
    setNumber(number - 1);
  };
  const onclickAddition = () => {
    setNumber(number + 1);
  };
  return (
    <div style={{ alignItems: "center", display: "flex", justifyContent: "start" }}>
      <button
        className={number <= 1 ? "button-quantity-disabled" : "button-quantity"}
        onClick={onclickSubtraction}
        disabled={number <= 1 ? true : false}
      >
        -
      </button>
      <input
        className="input-quantity"
        value={number}
        onChange={() => (event) => {
          setNumber(event.target.value);
        }}
        disabled
      />
      <button className="button-quantity" onClick={onclickAddition}>
        +
      </button>
    </div>
  );
};

export default GroupQuantity;
