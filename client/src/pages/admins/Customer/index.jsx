import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import * as UserServices from "../../../services/UserService";
import TableComponent from "../../../components/TableComponent";
import ButtonAction from "../../../components/ButtonAction";
import { MdDeleteForever } from "react-icons/md";

const Customer = () => {
  const [listData, setListData] = useState();
  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = async () => {
    const result = await UserServices.getAllUser();

    if (result?.EC === 0) {
      setListData(result?.DT);
    }
  };

  const dataTable =
    listData?.data?.length &&
    listData?.data?.map((item, key) => {
      return { ...item, key: key + 1 };
    });

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
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
      title: "Admin",
      dataIndex: "isAdmin",
      render: (isAdmin) => (isAdmin ? "TRUE" : "FALSE"),
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
      dataIndex: "avatar",
      render: (avatar) => (avatar ? <img src={avatar} className="upload-files" /> : "Chưa có avatar"),
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
            <ButtonAction icon={<FaPencilAlt />} colorButton="Green" title="Update" onClick={""} />
            <ButtonAction icon={<MdDeleteForever />} colorButton="Red" title="Delete" onClick={""} />
          </>
        );
      },
    },
  ];
  return (
    <div className="layout-content-admin">
      <div className="page-admin-title">quản lý người dùng</div>

      <div>
        <Button className="button-admin-circle" style={{ borderStyle: "dashed", height: "150px", width: "150px" }}>
          <FaPlus size={60} />
        </Button>
        <TableComponent
          columns={columns}
          data={dataTable}
          total={listData?.total}
          pageCurrent={listData?.pageCurrent}
          totalPage={listData?.totalPage}
        />
      </div>
    </div>
  );
};

export default Customer;
