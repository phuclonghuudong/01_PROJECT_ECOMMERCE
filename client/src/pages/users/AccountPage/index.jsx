import React from "react";
import { Button, Col, Table } from "antd";
import { Row } from "antd";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt, FaMailchimp, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const columns = [
  {
    title: "Đơn hàng",
    dataIndex: "order",
  },
  {
    title: "Ngày",
    dataIndex: "date",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Giá trị",
    dataIndex: "value",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];

const data = [
  {
    order: "1",
    date: "24/10/1999",
    address: "Long An",
    value: "100.000 đ",
    status: "OK",
  },
];
const AccountPage = () => {
  return (
    <div style={{ margin: "10px 10px 30px 10px" }}>
      <Row style={{ display: "grid" }}>
        <div className="title-page-account">Thông tin tài khoản</div>
        <span style={{ fontStyle: "italic", display: "flex" }}>
          Xin chào, <span className="title-page-account-color"> Guest</span>{" "}
        </span>
      </Row>

      <Row style={{ padding: "10px 0" }}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="title-content-page-account">Thông tin khách hàng</div>
          <div className="div-content-account">
            <span className="title-page-account-color">
              <FaUserAlt />
            </span>
            <div className="span-content-account">Họ tên:</div>
            <div className="p-content-account">Admin</div>
          </div>
          <div className="div-content-account">
            <span className="title-page-account-color">
              <FaMailchimp />
            </span>
            <div className="span-content-account">Email:</div>
            <div className="p-content-account">Admin</div>
          </div>

          <div className="div-content-account">
            <span className="title-page-account-color">
              <PiPhoneCallFill />
            </span>
            <div className="span-content-account">Số ĐT:</div>
            <div className="p-content-account"> Admin</div>
          </div>

          <div className="div-content-account">
            <span className="title-page-account-color">
              <FaMapMarkerAlt />
            </span>
            <div className="span-content-account">Địa chỉ:</div>
            <div className="p-content-account">Admin</div>
          </div>

          <div>
            <NavLink to="/thanh-vien/thong-tin">
              <Button className="button-submit">Sửa thông tin</Button>
            </NavLink>
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className="title-content-page-account">Đơn hàng của bạn</div>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            // scroll={{
            //   x: "calc(700px + 50%)",
            //   y: 47 * 5,
            // }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AccountPage;
