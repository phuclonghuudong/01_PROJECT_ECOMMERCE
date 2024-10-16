import { Modal } from "antd";
import React from "react";

const ModalComponent = ({ title, show, cancel, children, ...rests }) => {
  return (
    <Modal
      title={title}
      open={show}
      onCancel={cancel}
      footer={null}
      width={"90%"}
      style={{ marginTop: "-70px" }}
      {...rests}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
