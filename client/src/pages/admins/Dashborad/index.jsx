import React from "react";
import { Col, Row } from "antd";

const Dashborad = () => {
  return (
    <div className="layout-content-admin">
      <div className="page-admin-title">Dashborad</div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="dashborad-content">
            <div className="dashborad-admin-title">Doanh thu ngày</div>
            <div className="font-12">
              Đơn hàng: <span className="font-14">12</span> Sản phẩm: <span className="font-14">20</span>
            </div>
            <div className="font-12">
              Doanh thu: <span className="font-14">1200000 đ</span>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="dashborad-content">
            <div className="dashborad-admin-title">Doanh thu tuần</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="dashborad-content">
            <div className="dashborad-admin-title">Doanh thu tháng</div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="dashborad-content">
            <div className="dashborad-admin-title">Doanh thu quý</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashborad;
