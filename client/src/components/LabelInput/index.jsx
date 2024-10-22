import { Form, Input, InputNumber } from "antd";
import React from "react";

const LabelInput = ({
  label,
  name,
  message,
  typePassword,
  placeholder,
  typeTextArea,
  typeNumber,
  disabled,
  required,
  type,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          type: !type ? "" : type,
          required: !required ? true : false,
          // message: { message },
        },
      ]}
    >
      {typePassword ? (
        <Input.Password placeholder={placeholder} />
      ) : typeTextArea ? (
        <Input.TextArea
          // className="input-form"
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
        />
      ) : typeNumber ? (
        <InputNumber
          style={{ width: "80%" }}
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
          min={1}
          autoFocus={false}
        />
      ) : (
        <Input
          // className="input-form"
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
        />
      )}
    </Form.Item>
  );
};

export default LabelInput;
