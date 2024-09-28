import React from "react";
import { Col, Row } from "antd";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const TitlePageComponent = ({ pageName, pagePath, titleProduct, titlePath }) => {
  return (
    <Row>
      <Col className="title-page-conponent">
        <NavLink className="title-page-conponent-content" to="/">
          Trang chủ
        </NavLink>

        <FaAngleRight style={{ fontSize: "13px", padding: "0 5px" }} />
        <NavLink className="title-page-conponent-content" to={pagePath}>
          {pageName}
        </NavLink>

        {titleProduct ? (
          <>
            <FaAngleRight style={{ fontSize: "13px", padding: "0 5px" }} />
            <NavLink className="title-page-conponent-content" to={titlePath}>
              {titleProduct}
            </NavLink>
          </>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default TitlePageComponent;
