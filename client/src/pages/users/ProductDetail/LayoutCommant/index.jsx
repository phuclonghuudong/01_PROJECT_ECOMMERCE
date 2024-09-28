import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalf, FaStarHalfStroke } from "react-icons/fa6";
import { Col, Progress, Row } from "antd";
import ButtonSubmit from "../../../../components/ButtonSubmit";

const arrayReview = [
  { number: 5, icons: false, percentage: 0, review: 0 },
  { number: 4, icons: false, percentage: 0, review: 0 },
  { number: 3, icons: true, percentage: 28, review: 4 },
  { number: 2, icons: true, percentage: 11, review: 1 },
  { number: 1, icons: true, percentage: 10, review: 2 },
];
const LayoutCommant = () => {
  return (
    <div
      style={{
        margin: "7px",
        border: "1px solid #ddd",
        // boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.15)",
        boxShadow: "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
        borderRadius: "10px",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "500", fontSize: "1rem", margin: "0 0 10px 10px" }}>Đánh giá & nhận xét</div>
        <Row style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "10px" }}>
          <Col
            xs={8}
            sm={10}
            md={10}
            lg={8}
            xl={8}
            className="layout-center"
            style={{
              borderRight: "1px solid #ddd",
              lineHeight: "1.5",
              boxShadow: "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
            }}
          >
            <span style={{ fontWeight: "700", fontSize: "20px" }}>0.0/5</span>
            <span>
              <FaStar style={{ color: "gold", padding: "0 2px" }} />
              <FaStar style={{ color: "gold", padding: "0 2px" }} />
              <FaStar style={{ color: "gold", padding: "0 2px" }} />
              <FaStar style={{ color: "gold", padding: "0 2px" }} />
              <FaStar style={{ color: "black", padding: "0 2px" }} />
            </span>
            <span>
              <span style={{ fontWeight: "700" }}>00</span> đánh giá & nhận xét
            </span>
          </Col>
          <Col xs={16} sm={14} md={14} lg={16} xl={16}>
            {arrayReview.map((items) => {
              return (
                <Row
                  style={{
                    margin: "5px",
                    justifyContent: "center",
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{ fontWeight: "500" }}>
                    {items.number}
                  </Col>
                  <Col xs={2} sm={2} md={1} lg={1} xl={1}>
                    {items.icons === true ? <FaStar style={{ color: "gold" }} /> : <FaStar />}
                  </Col>
                  <Col xs={14} sm={16} md={18} lg={18} xl={18}>
                    <Progress percent={items.percentage} showInfo={false} />
                  </Col>
                  <Col xs={7} sm={5} md={4} lg={4} xl={4} style={{ fontSize: "13px" }}>
                    {items.review} đánh giá
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
        <div className="layout-center" style={{ paddingTop: "10px" }}>
          <span>Bạn đánh giá sao sản phẩm này</span>
          <Col>
            <ButtonSubmit title={"Đánh giá ngay"} />
          </Col>
        </div>
      </div>
    </div>
  );
};

export default LayoutCommant;
