import { Row } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <Row
      style={{ background: "black", width: "100%", height: "585px", alignItems: "center", justifyContent: "center" }}
    >
      <h1 style={{ color: "white" }}>Not Found. 404</h1>
    </Row>
  );
};

export default NotFound;
