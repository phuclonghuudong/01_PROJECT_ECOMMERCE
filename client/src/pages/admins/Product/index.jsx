import React from "react";
import { Button, Table } from "antd";
import { FaPlus } from "react-icons/fa";

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Họ và tên",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];

const data = [
  {
    stt: "1",
    username: "24/10/1999",
    email: "admin@gmail.com",
    address: "Long An",
    phone: "0347781024",
    status: "OK",
  },
];
const Product = () => {
  return (
    <div className="layout-content-admin">
      <div className="page-admin-title">Quản lý sản phẩm</div>

      <div>
        <Button style={{ borderStyle: "dashed", height: "150px", width: "150px" }}>
          <FaPlus size={60} />
        </Button>
        <Table
          columns={columns}
          dataSource={data}
          style={{ marginTop: "20px" }}
          size="small"
          // scroll={{
          //   x: "calc(700px + 50%)",
          //   y: 47 * 5,
          // }}
        />
      </div>
    </div>
  );
};

export default Product;
