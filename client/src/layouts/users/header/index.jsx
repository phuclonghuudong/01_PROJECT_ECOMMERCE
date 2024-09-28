import React from "react";
import { Badge, Col, Input, Popover, Row, Tooltip } from "antd";
import logo from "../../../assets/logo.png";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaUserLarge, FaUserAstronaut, FaLocationDot } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const contentAccount = (
  <div style={{ margin: "0", padding: "0" }}>
    <NavLink className="navlink-button-header" to={"/dang-nhap"}>
      <p className="header-button-hover">Đăng nhập</p>
    </NavLink>
    <NavLink className="navlink-button-header" to={"/dang-ky"}>
      <p className="header-button-hover">Đăng ký</p>
    </NavLink>
    <NavLink className="navlink-button-header" to={"/thanh-vien"}>
      <p className="header-button-hover">Trang cá nhân</p>
    </NavLink>
    <NavLink className="navlink-button-header" to={"/"}>
      <p className="header-button-hover">Đăng xuất</p>
    </NavLink>
  </div>
);
const contentCheck = (
  <div style={{ margin: "0", padding: "0" }}>
    <NavLink className="navlink-button-header" to={"/kiem-tra-don-hang"}>
      <p className="header-button-hover">Kiểm tra đơn hàng</p>
    </NavLink>
    <NavLink className="navlink-button-header" to={"/kiem-tra-bao-hanh"}>
      <p className="header-button-hover">Kiểm tra bảo hành</p>
    </NavLink>
  </div>
);
const Header = () => {
  return (
    <div style={{ height: "80px" }}>
      <Row className="layout-header">
        <Col xs={5} sm={3} md={3} lg={2} xl={2} className="layout-button-header">
          <img src={logo} className="imageHeader" />
        </Col>

        <Col xs={0} sm={0} md={0} lg={17} xl={18} style={{ padding: "20px 10px" }}>
          <Row style={{ borderBottom: "1px solid #dddddd" }}>
            <Col xs={0} sm={0} md={0} lg={10} xl={8} className="layout-center-header">
              <FaUserAstronaut className="icon-header padding-layout" />
              <p className="title-header">
                HOTLINE: <span className="title-header-color">0347781024 | 0763036308</span>
              </p>
            </Col>

            <Col xs={0} sm={0} md={0} lg={6} xl={5} className="layout-center-header">
              <FaLocationDot className="icon-header padding-layout" />
              <p className="title-header">HỆ THỐNG CỬA HÀNG</p>
            </Col>

            <Col xs={24} sm={24} md={24} lg={8} xl={11} className="layout-center-header padding-layout">
              <Input className="input-search" variant="borderless" placeholder="Tìm sản phẩm..." />
            </Col>
          </Row>
        </Col>

        <Col xs={9} sm={6} md={5} lg={5} xl={4}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="layout-button-header">
              <div style={{ textAlign: "center" }}>
                <Popover content={contentCheck} placement="bottom" trigger="hover">
                  <BiSolidBinoculars className="button-header" />
                  <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                    <p className="title-button">TRA CỨU</p>
                  </Col>
                </Popover>
              </div>
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="layout-button-header">
              <div style={{ textAlign: "center" }}>
                <Popover content={contentAccount} placement="bottom" trigger="hover">
                  <FaUserLarge className="button-header" />
                  <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                    <p className="title-button">Tài khoản</p>
                  </Col>
                </Popover>
              </div>
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={8} className="layout-button-header">
              <div style={{ textAlign: "center" }}>
                <NavLink to={"/gio-hang"}>
                  <Badge count={1} offset={[-10, 7]} size="middle">
                    <FaCartArrowDown className="button-header" />
                    <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                      <p className="title-button">Giỏ hàng</p>
                    </Col>
                  </Badge>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
