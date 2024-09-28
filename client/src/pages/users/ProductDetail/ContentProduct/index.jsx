import React from "react";
import product01 from "../../../../assets/product01.png";
import { Col, Row } from "antd";
import GroupQuantity from "../../../../components/GroupQuantity";
import { FaCheckCircle } from "react-icons/fa";
import ButtonSubmit from "./../../../../components/ButtonSubmit/index";

const LayoutLeft = () => {
  return (
    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <img src={product01} style={{ height: "auto" }} />
      </div>
    </Col>
  );
};
const ButtonSizeComponent = ({ title, status }) => {
  return (
    <button type="button" className={status ? "button-size-disabled" : "button-size"}>
      {title}
    </button>
  );
};
const ButtonColorComponent = ({ titleColor, titlePrice, onClick }) => {
  return (
    <Col xs={11} sm={8} md={8} lg={10} xl={8} style={{ margin: "5px" }}>
      <Row className={onClick ? "layout-button-color-click" : "layout-button-color"}>
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
          <img src={product01} style={{ width: "100%", paddingTop: "10px" }} />
        </Col>
        <Col
          xs={18}
          style={{
            fontSize: "13px",
            fontWeight: "500",
            justifyContent: "center",
            display: "grid",
          }}
        >
          <div style={{ alignItems: "center", justifyContent: "space-between", display: "flex" }}>
            <FaCheckCircle style={{ color: `${onClick ? "green" : ""}`, fontSize: "16px" }} />
            {titleColor}
          </div>
          <div style={{ color: "#dc3545" }}>
            {titlePrice} <span className="text-price-underline">đ</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
const listSize = [
  { name: "S", status: true },
  { name: "M", status: false },
  { name: "L", status: false },
  { name: "XL", status: false },
  { name: "2XL", status: true },
  { name: "3XL", status: true },
];
const Product = () => {
  return (
    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
      <Row style={{ padding: "20px", display: "flow" }}>
        <Col style={{ lineHeight: "2", fontSize: "14px" }}>
          <div style={{ fontSize: "26px", fontWeight: "600" }}>Áo Cầu Lông Victor 281 Nữ - Trắng</div>
          <div>
            Mã: <span style={{ color: "#E95221", textTransform: "uppercase" }}>VNB020330</span>
          </div>
          <div>
            Thương hiệu: <span style={{ color: "#E95221" }}>Victor</span>
          </div>
          <div>
            Tình trạng: <span style={{ color: "#E95221" }}>Còn hàng</span>
          </div>

          <div style={{ borderBottom: "1px solid #DDE1EF", paddingBottom: "5px" }}>
            <span style={{ color: "#e8002d", fontSize: "22px", fontWeight: "bold", paddingRight: "5px" }}>
              160.000 <span className="text-price-underline">đ</span>
            </span>
            <span style={{ color: "#acacac", fontSize: "16px", paddingRight: "5px" }}>Giá niêm yết:</span>
            <span style={{ color: "#acacac", fontSize: "16px", textDecoration: "line-through" }}>
              190.000 <span className="text-price-underline">đ</span>
            </span>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <div className="">Chọn size:</div>
            {listSize.map((items, key) => {
              return <ButtonSizeComponent title={items.name} key={key} status={items.status} />;
            })}
          </div>

          <div style={{ paddingBottom: "10px" }}>
            <div className="e">Chọn màu sắc:</div>
            <Row>
              <ButtonColorComponent titleColor="RED" titlePrice="121221" onClick={false} />
              <ButtonColorComponent titleColor="RED" titlePrice="121221" onClick={true} />
            </Row>
          </div>

          <div style={{ margin: "10px" }}>
            <GroupQuantity />
          </div>

          <Row style={{ margin: "20px 0" }}>
            <ButtonSubmit title={"Mua ngay"} bgColor={"#FFB916"} />
            <ButtonSubmit title={"Thêm vào giỏ hàng"} />

            <ButtonSubmit title={"Thanh toán thẻ"} bgColor={"#288AD6"} />
            <ButtonSubmit title={"Mua trả góp"} bgColor="#F1EB1F" />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
const ContentProduct = () => {
  return (
    <div>
      <Row>
        <LayoutLeft />
        <Product />
      </Row>
    </div>
  );
};

export default ContentProduct;
