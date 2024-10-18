import { Button } from "antd";
import React from "react";

const ButtonAction = ({ icon, colorButton, bgColor, title, onClick, nameButton }) => {
  return (
    <Button
      className="button-admin-circle"
      // shape="circle"
      style={{ color: colorButton, background: bgColor, fontSize: "18px" }}
      icon={icon}
      title={title}
      onClick={onClick}
    >
      {nameButton}
    </Button>
  );
};

export default ButtonAction;
