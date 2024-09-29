import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { FaPlus } from "react-icons/fa";
import * as UserServices from "../../../services/UserService";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Họ và tên",
    dataIndex: "username",
    // sorter: true,
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
    title: "Ảnh đại diện",
    dataIndex: "avata",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
  },
];

const Customer = () => {
  const [listData, setListData] = useState();
  console.log("listData", listData);
  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = async () => {
    const result = await UserServices.getAllUser();
    if (result?.EC === 0) {
      setListData(result.DT);
    }
  };
  return (
    <div className="layout-content-admin">
      <div className="page-admin-title">quản lý người dùng</div>

      <div>
        <Button className="button-admin-circle" style={{ borderStyle: "dashed", height: "150px", width: "150px" }}>
          <FaPlus size={60} />
        </Button>
        <Table
          columns={columns}
          dataSource={listData}
          style={{ marginTop: "20px" }}
          size="small"
          bordered
          // scroll={{
          //   x: "calc(700px + 50%)",
          //   y: 47 * 5,
          // }}
        />
      </div>
    </div>
  );
};

export default Customer;
