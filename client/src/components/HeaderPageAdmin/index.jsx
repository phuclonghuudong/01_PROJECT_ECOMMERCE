import React from "react";
import { FaUser } from "react-icons/fa";
import { FaFacebookMessenger, FaBell } from "react-icons/fa6";
import { Badge, Button, Col, Popover, Row } from "antd";
import { GoClockFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  const auth = useSelector((state) => state.auth.login);

  return (
    <Col xs={0} sm={0} md={24} lg={24} xl={24} className="">
      <Row
        style={{ padding: "0 10px", width: "100%", position: "", zIndex: "1000" }}
        className="layout-header-title-admin"
      >
        <Col xs={4} sm={4} md={6} lg={6} xl={6} align="left">
          <span className="title-header-admin">
            {auth?.USER && auth?.USER?.username ? `Hello, ${auth?.USER?.username}` : "Bạn chưa có tài khoản!"}
          </span>
        </Col>

        <Col xs={6} sm={6} md={13} lg={14} xl={15}>
          <span className="title-header-admin">
            <GoClockFill size={"20px"} />
          </span>
        </Col>

        <Col xs={12} sm={12} md={5} lg={4} xl={3}>
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
