import React from "react";

const GroupInput = ({ name, label, onChange, value, fail }) => {
  return (
    <div className={fail ? "group-input" : "group-input-false"}>
      <label for={name} className={fail ? "label-group-input" : "label-group-input-false"}>
        {label}
      </label>
      <input id={name} className="input-group-input" onChange={onChange} value={value} />
    </div>
  );
};

export default GroupInput;
