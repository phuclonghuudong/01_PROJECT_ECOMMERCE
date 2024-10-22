import React, { useState } from "react";

const GroupQuantity = ({ countInStock, number, onclickSubtraction, onclickAddition, onChange }) => {
  return (
    <div style={{ alignItems: "center", display: "flex", justifyContent: "start" }}>
      <button
        className={number <= 1 ? "button-quantity-disabled" : "button-quantity"}
        onClick={onclickSubtraction}
        disabled={number <= 1 ? true : false}
      >
        -
      </button>
      <input className={"input-quantity"} value={number} onChange={onChange} disabled />
      <button
        className={number >= countInStock ? "button-quantity-disabled" : "button-quantity"}
        onClick={onclickAddition}
        disabled={number >= countInStock ? true : false}
      >
        +
      </button>
    </div>
  );
};

export default GroupQuantity;
