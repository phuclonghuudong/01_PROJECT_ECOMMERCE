import React, { useEffect } from "react";
import TitlePageComponent from "../../../components/TitlePageComponent";
import { Col, Row } from "antd";
import CategoryComponent from "./CategoryComponent";
import ContentProduct from "./ContentProduct";
import LayoutCommant from "./LayoutCommant";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <TitlePageComponent
        pageName={"Sản phẩm"}
        pagePath={"/san-pham"}
        titleProduct="Áo cầu lông"
        titlePath={`/chi-tiet-san-pham/${id}`}
      />

      <Row style={{ display: "flex", justifyContent: "space-between", margin: "30px 0" }}>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <ContentProduct id={id} />
          <LayoutCommant />
        </Col>

        <Col xs={0} sm={0} md={0} lg={6} xl={6} style={{ padding: "0 10px" }}>
          <div className="layout-category-product-detail">
            <CategoryComponent />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
