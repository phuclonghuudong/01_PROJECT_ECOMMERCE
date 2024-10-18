import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, notification, Row, Spin } from "antd";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import * as ProductService from "../../../services/ProductService";
import { getBase64, isValidPrice } from "../../../utils/isValidInput";
import LabelInput from "../../../components/LabelInput";
import TableComponent from "./../../../components/TableComponent/index";
import ButtonAction from "../../../components/ButtonAction";
import Delete from "./Delete";
import ModalComponent from "../../../components/ModalComponent";
import LabelImage from "../../../components/LabelImage";
import DrawerComponent from "../../../components/DrawerComponent";
import LabelButton from "../../../components/LabelButton";
import FormComponent from "../../../components/FormComponent";
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
const Product = () => {
  const [formAddNew] = Form.useForm();
  const [formUpdate] = Form.useForm();
  const auth = useSelector((state) => state.auth.login);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const [avatar, setAvatar] = useState("");
  const [product, setProduct] = useState("");
  const [rowSelected, setRowSelected] = useState();
  const [listProduct, setListProduct] = useState();

  useEffect(() => {
    fetchData();
  }, [loading, isShowDelete, isShowModal, isShowUpdate]);

  useEffect(() => {
    if (product) {
      formUpdate.setFieldsValue(product);
    }
  }, [product]);

  useEffect(() => {
    if (rowSelected) {
      fetchGetDetailProduct(rowSelected);
    }
  }, [rowSelected, loading]);

  useEffect(() => {
    if (isShowModal) {
      setProduct();
      setAvatar();
      formAddNew.resetFields();
    }
  }, [isShowModal]);

  useEffect(() => {
    if (!isShowDelete || !isShowUpdate) {
      setProduct();
      setAvatar();
      formUpdate.resetFields();
    }
  }, [isShowDelete, isShowUpdate]);

  const dataTable =
    listProduct?.length &&
    listProduct.map((item) => {
      return { ...item, key: item._id };
    });

  const fetchData = async () => {
    setLoadingData(true);
    const result = await ProductService.admin_getAllProduct();
    if (result?.EC === 0) {
      setListProduct(result?.DT?.data);
    }
    setLoadingData(false);
  };
  const fetchGetDetailProduct = async (id) => {
    const result = await ProductService.admin_detail_product(id);
    if (result?.EC === 0) {
      setProduct(result?.DT);
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };

  const onFinishCreate = async (values) => {
    values.image = avatar;
    setLoading(true);
    const result = await ProductService.create(values, auth?.ACCESS_TOKEN);
    if (result?.EC === 0) {
      notification.success({
        message: result?.EM,
      });
      setIsShowModal(false);
    } else {
      notification.error({ message: result?.EM });
    }
    setLoading(false);
  };
  const onFinishFailedCreate = (errorInfo) => {
    if (errorInfo) {
      notification.error({
        message: "Vui lòng điền đầy đủ thông tin!",
      });
    }
  };
  const onFinishUpdate = async (values) => {
    values.image = avatar;

    setLoading(true);
    const result = await ProductService.update(product._id, values, auth?.ACCESS_TOKEN);

    if (result?.EC === 0) {
      notification.success({
        message: result?.EM,
      });
      setIsShowUpdate(false);
    } else {
      notification.error({ message: result?.EM });
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
  const handleDetailProduct = (type) => {
    if (type === "UPDATE") {
      setIsShowUpdate(true);
      setLoading(true);
      if (rowSelected) {
        fetchGetDetailProduct();
      }
    }
    if (type === "DELETE") {
      setIsShowDelete(true);
      setLoading(true);
      if (rowSelected) {
        fetchGetDetailProduct();
      }
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", sorter: (a, b) => a.id.length - b.id.length },
    { title: "Tên sản phẩm", dataIndex: "name", sorter: (a, b) => a.name.length - b.name.length },
    {
      title: "Giá bán",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => isValidPrice(price),
    },
    {
      title: "Số lượng",
      dataIndex: "countInStock",
      sorter: (a, b) => a.countInStock - b.countInStock,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (image) => <img src={image} className="upload-files" />,
    },
    { title: "Color", dataIndex: "color" },
    { title: "Size", dataIndex: "size" },
    {
      title: "Đánh giá",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
      render: (rating) => (!rating ? "Chưa có đánh giá" : rating),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
            <ButtonAction
              icon={<FaPencilAlt />}
              colorButton="Green"
              title="Update"
              onClick={() => handleDetailProduct("UPDATE")}
            />
            <ButtonAction
              icon={<MdDeleteForever />}
              colorButton="Red"
              title="Delete"
              onClick={() => handleDetailProduct("DELETE")}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="layout-content-admin">
      {/* <Spin tip="" spinning={loading}> */}
      <div className="page-admin-title">Quản lý sản phẩm</div>

      <div>
        <Button style={{ borderStyle: "dashed", height: "150px", width: "150px" }} onClick={() => setIsShowModal(true)}>
          <FaPlus size={60} />
        </Button>
        <TableComponent
          columns={columns}
          data={dataTable}
          loading={loadingData}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              }, // click row
            };
          }}
        />
      </div>

      <ModalComponent title={"Thêm mới sản phẩm"} show={isShowModal} cancel={() => setIsShowModal(false)}>
        <Spin tip="" spinning={loading}>
          <FormComponent
            {...formItemLayout}
            form={formAddNew}
            name="ADD NEW PRODUCT"
            validateMessages={validateMessages}
            onFinish={onFinishCreate}
            onFinishFailed={onFinishFailedCreate}
          >
            <LabelInput
              label={"Mã sản phẩm"}
              name={"id"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"ID"}
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
              typeNumber
              type={"number"}
              name={"price"}
              message={"Please input!"}
              typePassword={false}
              placeholder={"Giá sản phẩm"}
            />
            <LabelInput
              label={"Số lượng"}
              name={"countInStock"}
              typeNumber
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
              required
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

            <LabelImage name={"image"} onChange={handleOnchangeAvatar} avatar={avatar} />

            <LabelButton cancel={() => setIsShowModal(false)} title={"Thêm mới"} />
          </FormComponent>
        </Spin>
      </ModalComponent>

      <DrawerComponent title={"Cập nhật sản phẩm"} open={isShowUpdate} close={() => setIsShowUpdate(false)}>
        <Spin tip="" spinning={loading}>
          <FormComponent
            form={formUpdate}
            validateMessages={validateMessages}
            onFinish={onFinishUpdate}
            onFinishFailed={onFinishFailedUpdate}
          >
            <Row gutter={16}>
              <Col span={12}>
                <LabelInput label={"Mã sản phẩm"} name={"id"} disabled required />
              </Col>
              <Col span={12}>
                <LabelInput label={"Tên sản phẩm"} name={"name"} placeholder={"Tên sản phẩm"} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <LabelInput label={"Loại sản phẩm"} name={"type"} placeholder={"Loại sản phẩm"} />
              </Col>
              <Col span={6}>
                <LabelInput label={"Màu"} name={"color"} placeholder={"Màu sản phẩm"} />
              </Col>
              <Col span={6}>
                <LabelInput label={"Size"} name={"size"} placeholder={"Size sản phẩm"} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <LabelInput label={"Giá sản phẩm"} type={"number"} name={"price"} typeNumber />
              </Col>
              <Col span={6}>
                <LabelInput label={"Số lượng"} type={"number"} name={"countInStock"} typeNumber />
              </Col>
              <Col span={12}>
                <LabelInput label={"Đánh giá"} name={"rating"} required />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={6}>
                <LabelImage name={"image"} onChange={handleOnchangeAvatar} avatar={avatar ? avatar : product?.image} />
              </Col>
              <Col span={18}>
                <LabelInput
                  label={"Chi tiết sản phẩm"}
                  name={"description"}
                  typeTextArea
                  placeholder={"Chi tiết sản phẩm"}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
            <LabelButton cancel={() => setIsShowUpdate(false)} title={"Cập nhật"} />
          </FormComponent>
        </Spin>
      </DrawerComponent>

      <Delete
        isModalOpen={isShowDelete}
        handleCancel={() => setIsShowDelete(false)}
        data={product}
        isloading={loading}
        token={auth}
      />

      {/* </Spin> */}
    </div>
  );
};

export default Product;
