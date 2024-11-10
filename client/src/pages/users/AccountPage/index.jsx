import React, { useEffect, useState } from "react";
import { Button, Col, notification, Spin, Table } from "antd";
import { Row } from "antd";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt, FaMailchimp, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as OrderService from "../../../services/OrderService";
import { isValidDate, isValidPrice } from "../../../utils/isValidInput";
import { format } from "date-fns";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Người mua",
    dataIndex: "shippingAddress",
    render: (item) => item.fullname,
  },
  {
    title: "Ngày mua",
    dataIndex: "createdAt",
    render: (item) => format(item, "dd/MM/yyyy"),
  },
  {
    title: "Địa chỉ",
    dataIndex: "shippingAddress",
    render: (item) => item.address,
  },
  {
    title: "SĐT",
    dataIndex: "shippingAddress",
    render: (item) => "0" + item.phone,
  },
  {
    title: "Số lượng",
    dataIndex: "orderItems",
    render: (item) => item?.length + " Sản phẩm",
  },
  {
    title: "Giá trị",
    dataIndex: "totalPrice",
    render: (price) => (price ? isValidPrice(price) : "Giá rỗng"),
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];

const AccountPage = () => {
  const auth = useSelector((state) => state.auth.login);
  const navigate = useNavigate();
  const [listOrder, setListOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDataOrder();
  }, []);
  useEffect(() => {
    if (!auth?.USER) {
      notification.warning({
        message: "Bạn cần đăng nhập để thực hiện chức năng này!",
      });
      navigate("/dang-nhap");
    }
  }, [auth?.USER]);

  const fetchDataOrder = async () => {
    setLoading(true);
    const result = await OrderService.getOrderByUser(auth?.ACCESS_TOKEN, auth?.USER?._id);
    if (result?.EC === 0) {
      setListOrder(result?.DT);
    } else {
      console.log(result?.EM);
    }
    setLoading(false);
  };
  const dataTable =
    listOrder?.length &&
    listOrder?.map((item, key) => {
      return { ...item, key: key + 1 };
    });

  return (
    <div style={{ margin: "10px 10px 30px 10px" }}>
      <Row style={{ display: "grid" }}>
        <div className="title-page-account">Thông tin tài khoản</div>
        <span style={{ fontStyle: "italic", display: "flex" }}>
          Xin chào, <span className="title-page-account-color"> {auth?.USER?.username}</span>{" "}
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
            <div className="p-content-account">{auth?.USER?.username}</div>
          </div>
          <div className="div-content-account">
            <span className="title-page-account-color">
              <FaMailchimp />
            </span>
            <div className="span-content-account">Email:</div>
            <div className="p-content-account">{auth?.USER?.email}</div>
          </div>

          <div className="div-content-account">
            <span className="title-page-account-color">
              <PiPhoneCallFill />
            </span>
            <div className="span-content-account">Số ĐT:</div>
            <div className="p-content-account"> {auth?.USER?.phone}</div>
          </div>

          <div className="div-content-account">
            <span className="title-page-account-color">
              <FaMapMarkerAlt />
            </span>
            <div className="span-content-account">Địa chỉ:</div>
            <div className="p-content-account">{auth?.USER?.address}</div>
          </div>

          <div>
            <NavLink to="/thanh-vien/thong-tin">
              <Button className="button-submit">Sửa thông tin</Button>
            </NavLink>
          </div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <div className="title-content-page-account">Đơn hàng của bạn</div>
          <Spin spinning={loading}>
            <Table columns={columns} dataSource={dataTable} size="small" />
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default AccountPage;
