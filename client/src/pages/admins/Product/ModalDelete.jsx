import { Button, Modal, notification, Spin } from "antd";
import React, { useState } from "react";
import * as ProductServices from "../../../services/ProductService";

const ModalDelete = ({ isModalOpen, handleCancel, data }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    const result = await ProductServices.deleted(data._id, data);
    if (result?.EC === 0) {
      notification.success({
        message: result?.EM,
      });
      handleCancel();
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };
  return (
    <Modal title="Xóa sản phẩm" open={isModalOpen} onCancel={handleCancel} footer="">
      <Spin spinning={loading}>
        <p>Tên sản phẩm: {data?.name}</p>
        <p>Loại sản phẩm: {data?.type}</p>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
        <Button type="primary" className="admin-btn-delete" onClick={handleDelete}>
          Xóa
        </Button>

        <Button style={{ marginLeft: "10px" }} type="" onClick={handleCancel}>
          Cancel
        </Button>
      </Spin>
    </Modal>
  );
};

export default ModalDelete;
