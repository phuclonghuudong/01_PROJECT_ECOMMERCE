import { Form, Input } from "antd";
import React from "react";

const LabelInput = ({ label, name, message, typePassword, placeholder }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: { message },
        },
      ]}
    >
      {typePassword ? (
        <Input.Password className="input-form" placeholder={placeholder} />
      ) : (
        <Input className="input-form" placeholder={placeholder} />
      )}
    </Form.Item>
  );
};

export default LabelInput;
