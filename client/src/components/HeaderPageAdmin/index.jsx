import React from "react";
import { FaUser } from "react-icons/fa";
import { FaFacebookMessenger, FaBell } from "react-icons/fa6";
import { Badge, Button, Col, Popover, Row } from "antd";
import { GoClockFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

const contentAccount = (
  <div style={{ margin: "0", padding: "0" }}>
    <NavLink className="navlink-button-header" to={"/admin/dang-nhap"}>
      <p className="header-button-hover">Trang cá nhân</p>
    </NavLink>
    <NavLink className="navlink-button-header" to={"/"}>
      <p className="header-button-hover">Đăng xuất</p>
    </NavLink>
  </div>
);
const HeaderPageAdmin = () => {
  return (
    <Col xs={0} sm={0} md={24} lg={24} xl={24} className="">
      <Row style={{ padding: "0 10px ", width: "100%" }} className="layout-header-title-admin">
        <Col xs={4} sm={4} md={4} lg={4} xl={4} align="left">
          <span className="title-header-admin">Hello, ADMIN</span>
        </Col>

        <Col xs={6} sm={6} md={15} lg={16} xl={17}>
          <span className="title-header-admin">
            <GoClockFill size={"20px"} />
          </span>
        </Col>

        <Col xs={12} sm={12} md={5} lg={4} xl={3} className="">
          <Button className="button-admin-circle" shape="circle" icon={<FaFacebookMessenger />} />

          <Badge size="small" offset={[-5, 7]} count={5} color="#52c41a">
            <Button className="button-admin-circle" shape="circle" icon={<FaBell />} />
          </Badge>

          <Popover content={contentAccount} placement="bottom" trigger="hover">
            <Button className="button-admin-circle" shape="circle" icon={<FaUser />} />
          </Popover>
        </Col>
      </Row>
    </Col>
  );
};

export default HeaderPageAdmin;
