import React from "react";
import TitlePageComponent from "../../../components/TitlePageComponent";
import ContentProduct from "./ContentProduct";
import LayoutFilter from "./LayoutFilter";
import { Col, Row } from "antd";

const ProductPage = () => {
  return (
    <div>
      <TitlePageComponent pageName={"Sản phẩm"} pagePath={"/san-pham"} />

      <Row style={{ margin: "20px 0" }}>
        <Col xs={0} sm={0} md={0} lg={6} xl={6}>
          <LayoutFilter />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <ContentProduct />
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
