import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { FaPlus } from "react-icons/fa";
import * as UserServices from "../../../services/UserService";
import TableComponent from "../../../components/TableComponent";

const columns = [
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
    sorter: (a, b) => a.phone - b.phone,
  },
  {
    title: "Ảnh đại diện",
    dataIndex: "avata",
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
    sorter: (a, b) => a.status - b.status,
  },
];

const Customer = () => {
  const [listData, setListData] = useState();
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
        <TableComponent columns={columns} data={listData} />
      </div>
    </div>
  );
};

export default Customer;
