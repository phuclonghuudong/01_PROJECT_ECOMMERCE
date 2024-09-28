import { Button, Col } from "antd";
import React from "react";

const ButtonSubmit = ({ title, bgColor, htmlType }) => {
  return (
    <Col className="layout-button-submit">
      <Button className="button-submit" style={{ background: `${bgColor ? bgColor : "#e95211"}` }} htmlType={htmlType}>
        {title}
      </Button>
    </Col>
  );
};

export default ButtonSubmit;
