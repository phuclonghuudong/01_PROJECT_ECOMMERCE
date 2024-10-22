import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaChartBar, FaUserAlt, FaCartArrowDown } from "react-icons/fa";
import { FaOptinMonster, FaSalesforce } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { Col, Menu, Row } from "antd";
import { IoMenuSharp } from "react-icons/io5";
import { RiMenuFold3Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPostAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import HeaderPageAdmin from "../../components/HeaderPageAdmin";
import { useSelector } from "react-redux";

const LayoutAdmin = () => {
  const auth = useSelector((state) => state.auth.login);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [collapsedSmall, setCollapsedSmall] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const toggleCollapsedSmall = () => {
    setCollapsedSmall(!collapsedSmall);
  };

  const items = [
    !collapsedSmall
      ? {
          icon: (
            <div
              type="primary"
              onClick={toggleCollapsed}
              style={{
                width: "100%",
              }}
            >
              {!collapsed ? <div>Quản lý danh mục</div> : <RiMenuFold3Line size={"20px"} />}
            </div>
          ),

          label: "Mở rộng",
        }
      : "",
    {
      key: "1",
      icon: (
        <NavLink to={"/admin/"}>
          <FaChartBar size={"20px"} />
        </NavLink>
      ),
      label: "Thống kê",
    },
    {
      key: "2",
      icon: (
        <NavLink to={"/admin/customer"}>
          <FaUserAlt size={"20px"} />
        </NavLink>
      ),
      label: "Khách hàng",
    },
    {
      key: "3",
      icon: (
        <NavLink to={"/admin/category"}>
          <FaOptinMonster size={"20px"} />
        </NavLink>
      ),
      label: "Danh mục sản phẩm",
    },
    {
      key: "4",
      icon: (
        <NavLink to={"/admin/order"}>
          <FaCartArrowDown size={"20px"} />
        </NavLink>
      ),
      label: "Xử lý đơn hàng",
    },
    {
      key: "sub1",
      label: "Sản phẩm",
      icon: <HiAcademicCap size={"20px"} />,
      children: [
        {
          key: "5",
          icon: (
            <NavLink to={"/admin/product"}>
              <HiAcademicCap size={"20px"} />
            </NavLink>
          ),
          label: "Sản phẩm",
        },
      ],
    },
    {
      key: "6",
      icon: (
        <NavLink to={"/admin/shipping"}>
          <TbTruckDelivery size={"20px"} />
        </NavLink>
      ),
      label: "Vận chuyển",
    },
    {
      key: "7",
      icon: (
        <NavLink to={"/admin/sales"}>
          <FaSalesforce size={"20px"} />
        </NavLink>
      ),
      label: "Khuyến mãi",
    },
    {
      key: "8",
      icon: (
        <NavLink to={"/admin/news"}>
          <MdPostAdd size={"20px"} />
        </NavLink>
      ),
      label: "Tin tức",
    },
  ];
  useEffect(() => {
    if (!auth) {
      navigate("/dang-nhap");
    }
  }, [auth]);
  return (
    <div>
      <Col xs={24} sm={24} md={0} lg={0} xl={0}>
        <Row className="menu-content-admin">
          <Col xs={2} sm={2} md={1} lg={0} xl={0} className="menu-navbar-admin">
            <IoMenuSharp onClick={toggleCollapsedSmall} />
          </Col>
          <Col xs={2} sm={2} md={1} lg={0} xl={0} className="menu-navbar-admin">
            <FaUserCircle />
          </Col>
        </Row>

        <Row>
          {collapsedSmall ? (
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Menu
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{ display: "flex", flexFlow: "column", height: "100vh" }}
              />
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Col>

      <Row>
        <Col xs={0} sm={0} md={!collapsed ? 6 : 3} lg={!collapsed ? 4 : 2} xl={!collapsed ? 4 : 2}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            style={{ display: "flex", flexFlow: "column", height: "100vmax" }}
          />
        </Col>
        <Col xs={24} sm={24} md={!collapsed ? 18 : 21} lg={!collapsed ? 20 : 22} xl={!collapsed ? 20 : 22}>
          <HeaderPageAdmin />
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default LayoutAdmin;
