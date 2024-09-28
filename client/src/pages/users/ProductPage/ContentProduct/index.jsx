import { Col, Pagination, Popover, Row } from "antd";
import React from "react";
import { FaSortAmountDown, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import imgProduct from "../../../../assets/product01.png";

const TitlePage = ({ title }) => {
  const contentSort = (
    <div style={{ margin: "0", padding: "0" }}>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Giá tăng dần</p>
      </NavLink>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Giá giảm dần</p>
      </NavLink>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Hàng mới nhất</p>
      </NavLink>
    </div>
  );
  return (
    <Row className="title-content-product-page" justify="space-between">
      <span>{title}</span>

      <div
        className="align-items-center"
        style={{
          textTransform: "capitalize",
          fontWeight: "500",
          fontSize: "13px",
        }}
      >
        <FaSortAmountDown style={{ padding: "0 2px", alignContent: "center", fontSize: "16px" }} />
        sắp xếp:
        <Popover content={contentSort} placement="bottomRight" trigger="hover" className="align-items-center">
          <span style={{ fontWeight: "400", paddingLeft: "5px", cursor: "pointer" }}>Mặc định</span>{" "}
          <FaChevronDown style={{ padding: " 0 4px", alignContent: "center", fontSize: "16px" }} />
        </Popover>
      </div>
    </Row>
  );
};

const Content = () => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "10px", fontSize: "14px", cursor: "pointer" }}>
      <NavLink to={"/san-pham/chi-tiet-san-pham"} className="name-product-page navlink">
        <img src={imgProduct} style={{ width: "100%" }} />
        <div className="name-product-page">Áo cầu lông Victor 281 Nữ - Trắng</div>
        <div style={{ color: "red", fontWeight: "500" }}>
          160.000 <span className="text-price-underline">đ</span>
        </div>
      </NavLink>
    </Col>
  );
};

const ContentProduct = () => {
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={23}>
        <TitlePage title="Vợt cầu lông" />

        <Row className="main-product-page-product">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </Row>

        <div className="pagination">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div>
      </Col>
    </Row>
  );
};

export default ContentProduct;
