import { Button, Form } from "antd";
import React from "react";
import { WrapperUploadFile } from "./style";
import { FaFileUpload } from "react-icons/fa";

const LabelImage = ({ avatar, name, onChange }) => {
  return (
    <Form.Item
      label={"Hình ảnh"}
      name={name}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <div style={{ display: "flex", justifyContent: "start" }}>
        <WrapperUploadFile onChange={onChange} maxCount={1}>
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
  );
};

export default LabelImage;
