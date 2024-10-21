import { Button, Col } from "antd";
import React from "react";

const ButtonSubmit = ({ title, bgColor, htmlType, onClick }) => {
  return (
    <Col className="layout-button-submit">
      <Button
        onClick={onClick}
        className="button-submit"
        style={{ background: `${bgColor ? bgColor : "#e95211"}` }}
        htmlType={htmlType}
      >
        {title}
      </Button>
    </Col>
  );
};

export default ButtonSubmit;
