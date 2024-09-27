import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GiFlexibleStar } from "react-icons/gi";
import { AiFillSchedule } from "react-icons/ai";
import { RiBlazeFill } from "react-icons/ri";
import { Row, Col } from "antd";
import { TitleSectionService } from "./style";

const SectionServiceComponent = () => {
  const listItem = [
    {
      text01: "Vận chuyển",
      text02: "Thanh toán khi nhận hàng",
      textUpperCase01: "Toàn quốc",
      textUpperCase02: "",
      icon: <FaTruckArrowRight />,
    },
    {
      text01: "Bảo đảm chất lượng",
      text02: "Sản phẩm bảo đảm chất lượng",
      textUpperCase01: "",
      textUpperCase02: "",
      icon: <GiFlexibleStar />,
    },
    {
      text01: "Tiến hành",
      text02: "Với nhiều",
      textUpperCase01: "Thanh toán",
      textUpperCase02: "Phương thức",
      icon: <AiFillSchedule />,
    },
    {
      text01: "Đối với sản phẩm mới",
      text02: "nếu sản phẩm lỗi",
      textUpperCase01: "",
      textUpperCase02: "",
      icon: <RiBlazeFill />,
    },
  ];
  return (
    <Row>
      {listItem.map((items) => {
        return (
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ padding: "0 15px", paddingBottom: "15px" }}>
            <Row
              style={{
                border: "1px solid #ededed",
                padding: "10px",
                borderRadius: "10px",
                lineHeight: "1",
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
                color: "#e95211",
              }}
            >
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={5}
                xl={5}
                style={{ alignItems: "center", justifyContent: "center", display: "flex" }}
              >
                <span style={{ fontSize: "35px" }}>{items.icon}</span>
              </Col>

              <Col xs={18} sm={18} md={18} lg={19} xl={19} style={{ paddingLeft: "10px" }}>
                <Row style={{ paddingBottom: "10px" }}>
                  {items.text01} <TitleSectionService>{items.textUpperCase01}</TitleSectionService>
                </Row>

                <Row>
                  {items.text02} <TitleSectionService>{items.textUpperCase02}</TitleSectionService>
                </Row>
              </Col>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default SectionServiceComponent;
