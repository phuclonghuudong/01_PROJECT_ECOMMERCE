import React from "react";
import { Col } from "antd";
import listRoutes from "../../../routes/ListRoutes";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Col xs={0} sm={0} md={0} lg={24} xl={24}>
      <div className="menu-content">
        {listRoutes.map((items, key) => {
          return (
            <NavLink className="layout-menu-navbar" to={items.path} key={key}>
              {items.title}
            </NavLink>
          );
        })}
      </div>
    </Col>
  );
};

export default Menu;
