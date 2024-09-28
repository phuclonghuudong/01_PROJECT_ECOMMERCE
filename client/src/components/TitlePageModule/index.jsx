import { Col } from "antd";
import React from "react";

const TitlePageModule = ({ title }) => {
  return (
    <div align="center" style={{ padding: "20px " }}>
      <div className="title-page-module">{title}</div>

      <Col style={{ margin: "15px 0" }}>
        <div className="process-page-module">
          <span className="span-process-page-module"></span>
        </div>
      </Col>
    </div>
  );
};

export default TitlePageModule;
