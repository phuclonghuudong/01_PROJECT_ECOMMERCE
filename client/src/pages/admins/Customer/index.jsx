import React, { useEffect, useState } from "react";
import { Button, Col, Form, notification, Row, Spin, Table } from "antd";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import * as UserServices from "../../../services/UserService";
import TableComponent from "../../../components/TableComponent";
import ButtonAction from "../../../components/ButtonAction";
import { MdDeleteForever } from "react-icons/md";
import FormComponent from "./../../../components/FormComponent/index";
import DrawerComponent from "../../../components/DrawerComponent";
import LabelInput from "../../../components/LabelInput";
import LabelImage from "../../../components/LabelImage";
import LabelButton from "../../../components/LabelButton";
import { listRole, listStatus } from "../../../routes/ListData";
import SelectComponent from "../../../components/SelectComponent";
import { getBase64 } from "../../../utils/isValidInput";
import { useSelector } from "react-redux";

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${name} is not a valid email!",
    number: "${name} is not a valid number!",
  },
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
    md: {
      span: 8,
    },
    lg: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 17,
    },
    md: {
      span: 16,
    },
    lg: {
      span: 18,
    },
  },
};
const Customer = () => {
  const [formUpdate] = Form.useForm();
  const [listData, setListData] = useState();
  const [userDetail, setUserDetail] = useState();
  const [rowSelected, setRowSelected] = useState();
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const auth = useSelector((state) => state.auth.login);

  useEffect(() => {
    fetchListData();
  }, [loading, isShowUpdate]);
  useEffect(() => {
    if (rowSelected) {
      fetchGetDetailUser(rowSelected);
    }
  }, [rowSelected, loading]);
  useEffect(() => {
    if (userDetail) {
      formUpdate.setFieldsValue(userDetail);
    }
  }, [userDetail]);
  useEffect(() => {
    if (!isShowUpdate) {
      formUpdate.resetFields();
      setAvatar();
    }
  }, [loading, isShowUpdate]);

  const fetchListData = async () => {
    const result = await UserServices.getAllUser();

    if (result?.EC === 0) {
      setListData(result?.DT);
    }
  };
  const fetchGetDetailUser = async (id) => {
    const result = await UserServices.get_Detail_User_Update(id);

    if (result?.EC === 0) {
      setUserDetail(result?.DT);
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };

  const onFinishUpdate = async (values) => {
    values.avatar = avatar;
    setLoading(true);

    const result = await UserServices.update(userDetail._id, values, auth?.ACCESS_TOKEN);

    if (result?.EC === 0) {
      notification.success({
        message: result?.EM,
      });
      setIsShowUpdate(false);
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };
  const onFinishFailedUpdate = (errorInfo) => {
    if (errorInfo) {
      notification.error({
        message: "Vui lòng điền đầy đủ thông tin!",
      });
    }
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handelDetailUser = () => {
    setLoading(true);
    setIsShowUpdate(true);
  };

  const dataTable =
    listData?.data?.length &&
    listData?.data?.map((item, index) => {
      return { ...item, key: index + 1 };
    });

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      sorter: (a, b) => a.key - b.key,
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
      title: "Quyền",
      dataIndex: "isAdmin",
      render: (isAdmin) => (isAdmin ? "ADMIN" : "USER"),
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      render: (address) => (address ? address : "Chưa có địa chỉ"),
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
      render: (status) => (Number(status) === 0 ? "Dừng hoạt động" : Number(status) === 1 ? "Hoạt động" : "Tạm khóa"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
            <ButtonAction
              onClick={() => handelDetailUser()}
              icon={<FaPencilAlt />}
              colorButton="Green"
              title="Update"
            />
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
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              }, // click row
            };
          }}
        />
      </div>

      <DrawerComponent title={"Cập nhật khách hàng"} open={isShowUpdate} close={() => setIsShowUpdate(false)}>
        <Spin tip="" spinning={loading}>
          <FormComponent
            {...formItemLayout}
            form={formUpdate}
            name={"UPDATE CUSTOMER"}
            validateMessages={validateMessages}
            onFinish={onFinishUpdate}
            onFinishFailed={onFinishFailedUpdate}
          >
            <Row gutter={16}>
              <Col span={12}>
                <LabelInput label={"Mã khách hàng"} name={"_id"} disabled required />
              </Col>
              <Col span={12}>
                <LabelInput label={"Họ và tên"} name={"username"} placeholder={"Họ và tên khách hàng"} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <LabelInput label={"Email"} name={"email"} placeholder={"Email"} />
              </Col>
              <Col span={12}>
                <LabelInput label={"Địa chỉ"} name={"address"} placeholder={"Địa chỉ khách hàng"} required />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <LabelInput label={"Phone"} type={"number"} name={"phone"} typeNumber />
              </Col>
              <Col span={12}>
                <SelectComponent label="Trạng thái" data={listStatus} name={"status"} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <LabelImage
                  name={"avatar"}
                  onChange={handleOnchangeAvatar}
                  avatar={avatar ? avatar : userDetail?.avatar}
                />
              </Col>
              <Col span={12}>
                <SelectComponent label="Quyền" data={listRole} name={"isAdmin"} />
              </Col>
            </Row>

            <LabelButton cancel={() => setIsShowUpdate(false)} title={"Cập nhật"} />
          </FormComponent>
        </Spin>
      </DrawerComponent>
    </div>
  );
};

export default Customer;
