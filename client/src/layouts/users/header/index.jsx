import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Input, notification, Popover, Row, Spin, Tooltip } from "antd";
import logo from "../../../assets/logo.png";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaUserLarge, FaUserAstronaut, FaLocationDot } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import * as UserService from "../../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../../redux/auth.slice";
import { searchRedux } from "../../../redux/product.slice";
import { FaSearch } from "react-icons/fa";

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
const ButtonLabelSearch = ({ onClick, onChange, onKeyUp }) => {
  return (
    <div className="div-search-header">
      <Input
        className="input-search"
        variant="borderless"
        placeholder="Tìm sản phẩm..."
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <Button className="button-search-header" onClick={onClick}>
        <span style={{ fontSize: "18px", paddingTop: "2px" }}>
          <FaSearch />
        </span>
      </Button>
    </div>
  );
};
const Header = () => {
  const auth = useSelector((state) => state.auth.login);

  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    setLoading(true);
    const result = await UserService.logoutUser();

    if (result?.EC === 0) {
      notification.success({
        message: result?.EM,
      });
      localStorage.clear();
      dispatch(logoutRedux());

      navigate("/");
    }
    setLoading(false);
  };
  const contentAccount = (
    <div style={{ margin: "0", padding: "0" }}>
      {auth?.USER && auth?.ACCESS_TOKEN ? (
        <>
          <NavLink className="navlink-button-header" to={"/thanh-vien"}>
            <p className="header-button-hover">Trang cá nhân</p>
          </NavLink>
          <NavLink className="navlink-button-header" to={"/"} onClick={handleLogout}>
            <p className="header-button-hover">Đăng xuất</p>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="navlink-button-header" to={"/dang-nhap"}>
            <p className="header-button-hover">Đăng nhập</p>
          </NavLink>
          <NavLink className="navlink-button-header" to={"/dang-ky"}>
            <p className="header-button-hover">Đăng ký</p>
          </NavLink>
        </>
      )}
    </div>
  );

  const handleSearch = () => {
    // if (search) {
    dispatch(searchRedux(search));
    navigate("/san-pham");
    // } else {
    //   notification.warning({
    //     message: "Bạn chưa nhập sản phẩm cần tìm kiếm!",
    //   });
    // }
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      dispatch(searchRedux(search));
      navigate("/san-pham");
    }
  };

  return (
    <div style={{ height: "80px" }}>
      <Spin tip="" spinning={loading}>
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
                <ButtonLabelSearch
                  onClick={handleSearch}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
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
      </Spin>
    </div>
  );
};

export default Header;
