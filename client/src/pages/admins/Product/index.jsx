import React, { useEffect, useState } from "react";
import { Button, Form, Modal, notification, Spin } from "antd";
import { FaFileUpload, FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import * as ProductService from "../../../services/ProductService";
import { getBase64, isValidPrice } from "../../../utils/isValidInput";
import LabelInput from "../../../components/LabelInput";
import TableComponent from "./../../../components/TableComponent/index";
import { WrapperUploadFile } from "./style";
import ButtonAction from "../../../components/ButtonAction";
import ModalDelete from "./ModalDelete";

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

const Product = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [btnUpdate, setBtnUpdate] = useState(false);

  const [product, setProduct] = useState("");
  const [listProduct, setListProduct] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
    listProduct;
    product;
    form;
  }, [btnUpdate, isShowModal]);

  const fetchData = async () => {
    const result = await ProductService.admin_getAllProduct();
    if (result?.EC === 0) {
      setListProduct(result?.DT?.data);
    }
  };

  const onFinish = async (values) => {
    values.image = avatar;

    if (!btnUpdate) {
      setLoading(true);
      const result = await ProductService.create(values);

      if (result?.EC === 0) {
        form.resetFields();
        setAvatar("");
        notification.success({ message: result?.EM });
        fetchData();
        setIsShowModal(false);
      } else {
        notification.error({ message: result?.EM });
      }
      setLoading(false);
    }
    if (btnUpdate) {
      setLoading(true);
      const result = await ProductService.update(product._id, values);
      console.log("update", result);

      if (result?.EC === 0) {
        form.resetFields();
        setProduct("");
        setAvatar("");
        notification.success({ message: result?.EM });
        fetchData();
        setIsShowModal(false);
      } else {
        notification.error({ message: result?.EM });
      }
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
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
  const handleShowCreateProduct = () => {
    setIsShowModal(true);
    setBtnUpdate(false);
    setProduct("");
    setAvatar("");
  };
  const handleShowUpdateProduct = (item) => {
    setIsShowModal(true);
    setBtnUpdate(true);
    setProduct(item);
    setAvatar(item.image);
  };
  const handleShowDeleteProduct = (item) => {
    setIsShowModalDelete(true);
    setProduct(item);
  };
  const handleCancelModal = () => {
    form.resetFields();
    setProduct("");
    setAvatar("");
    setBtnUpdate(false);
    setIsShowModal(false);
  };
  const handleCancelDeleteProduct = () => {
    setIsShowModalDelete(false);
    fetchData();
  };
  const columns = [
    { title: "ID", dataIndex: "id", sorter: (a, b) => a.id - b.id },
    { title: "Tên sản phẩm", dataIndex: "name" },
    {
      title: "Giá bán",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => isValidPrice(price),
    },
    { title: "Hình ảnh", dataIndex: "image", render: (image) => <img src={image} className="upload-files" /> },
    { title: "Color", dataIndex: "color" },
    { title: "Size", dataIndex: "size" },
    {
      title: "Đánh giá",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
      render: (rating) => (!rating ? "Chưa có đánh giá" : rating),
    },
    {
      title: "Trạng thái",
      dataIndex: "",
      render: (item) => (
        <>
          <ButtonAction
            icon={<FaPencilAlt />}
            colorButton="Green"
            title="Update"
            onClick={() => handleShowUpdateProduct(item)}
          />
          <ButtonAction
            icon={<MdDeleteForever />}
            colorButton="Red"
            title="Delete"
            onClick={() => handleShowDeleteProduct(item)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="layout-content-admin">
      {/* <Spin tip="" spinning={loading}> */}
      <div className="page-admin-title">Quản lý sản phẩm</div>

      <div>
        <Button
          style={{ borderStyle: "dashed", height: "150px", width: "150px" }}
          onClick={() => handleShowCreateProduct()}
        >
          <FaPlus size={60} />
        </Button>
        <TableComponent columns={columns} data={listProduct} />
      </div>

      <Modal
        title={!btnUpdate ? "Thêm mới sản phẩm" : "Cập nhật sản phẩm"}
        open={isShowModal}
        onCancel={() => setIsShowModal(false)}
        footer=""
        width={"90%"}
        style={{ marginTop: "-70px" }}
      >
        <Spin tip="" spinning={loading}>
          <Form
            {...formItemLayout}
            form={form}
            name="ADD NEW PRODUCT"
            validateMessages={validateMessages}
            variant="filled"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={product}
            autoComplete="off"
          >
            <LabelInput
              label={"Mã sản phẩm"}
              name={"id"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"ID"}
              disabled={!btnUpdate ? false : true}
              required={!btnUpdate ? false : true}
            />
            <LabelInput
              label={"Tên sản phẩm"}
              name={"name"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Tên sản phẩm"}
            />

            <LabelInput
              label={"Loại sản phẩm"}
              name={"type"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Loại sản phẩm"}
            />
            <LabelInput
              label={"Màu"}
              name={"color"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Màu"}
            />
            <LabelInput
              label={"Kích thước"}
              name={"size"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Size"}
            />
            <LabelInput
              label={"Giá sản phẩm"}
              type="number"
              name={"price"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Giá sản phẩm"}
            />
            <LabelInput
              label={"Số lượng"}
              name={"countInStock"}
              type={"number"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Số lượng"}
            />
            <LabelInput
              label={"Đánh giá"}
              name={"rating"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Đánh giá"}
            />
            <LabelInput
              label={"Chi tiết sản phẩm"}
              name={"description"}
              message={"Please input!"}
              typePassword={false}
              typeTextArea={true}
              placeholder={"Chi tiết sản phẩm"}
              required
            />

            <Form.Item
              label={"Hình ảnh"}
              name={"image"}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <div style={{ display: "flex", justifyContent: "start" }}>
                <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                  <Button icon={<FaFileUpload />}>Select File</Button>
                </WrapperUploadFile>
                {avatar && (
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      height: "60px",
                      width: "60px",
                      objectFit: "cover",
                      padding: "0 20px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 16,
              }}
            >
              <Button type="primary" className="admin-btn-addNew" htmlType="submit">
                {!btnUpdate ? "Thêm mới" : "Cập nhật"}
              </Button>

              <Button style={{ marginLeft: "10px" }} type="" onClick={() => handleCancelModal()}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>

      <ModalDelete isModalOpen={isShowModalDelete} handleCancel={handleCancelDeleteProduct} data={product} />

      {/* </Spin> */}
    </div>
  );
};

export default Product;
