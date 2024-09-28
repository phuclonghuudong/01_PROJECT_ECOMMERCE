import { Button, Checkbox, Col, Row } from "antd";
import React from "react";
import { IoClose } from "react-icons/io5";

const TitleContent = ({ title }) => {
  return <div className="title-filter-product">{title}</div>;
};
const Content = ({ title }) => {
  return (
    <div style={{ marginBottom: "10px", position: "relative" }}>
      <Checkbox></Checkbox>
      <span style={{ paddingLeft: "15px" }}>{title}</span>
    </div>
  );
};
const Filter = () => {
  return (
    <div className="content-layout-filter-product">
      <div className="title-filter-product align-items-center">
        <p style={{ color: "#E95221" }}>Bạn chọn</p>
        <Button className="button">
          Bỏ hết
          <IoClose style={{ fontSize: "15px", fill: "#666" }} />
        </Button>
      </div>
      <div>
        <Button className="button button-filter">
          <IoClose style={{ fontSize: "15px", fill: "#666" }} />
          1.000.000
        </Button>
      </div>
    </div>
  );
};
const listPrice = [
  { title: "Giá dưới 500.000đ" },
  { title: "500.000đ - 1 triệu" },
  { title: "1 - 2 triệu" },
  { title: "Giá trên 3 triệu" },
];
const listWeight = [
  { title: "2U: 90 - 94g" },
  { title: "3U: 85 - 89g" },
  { title: "4U: 80 - 84g" },
  { title: "5U: 75 - 79g" },
  { title: "F: 70 - 74g" },
];
const LayoutFilter = () => {
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={22} xl={22} className="layout-filter-product">
        <Filter />
        <div className="content-layout-filter-product">
          <TitleContent title="Chọn mức giá" />
          {listPrice.map((items, key) => {
            return <Content title={items.title} key={key} />;
          })}
        </div>

        <div className="content-layout-filter-product">
          <TitleContent title="Trọng lượng" />
          {listWeight.map((items, key) => {
            return <Content title={items.title} key={key} />;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default LayoutFilter;
