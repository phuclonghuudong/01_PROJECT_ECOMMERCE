import { Form, Input, InputNumber } from "antd";
import React from "react";

const LabelInputUpdate = ({
  value,
  onChange,
  label,
  name,
  typePassword,
  placeholder,
  typeTextArea,
  disabled,
  required,
  type,
  defaultValue,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          type: !type ? "" : type,
          required: !required ? true : false,
        },
      ]}
    >
      {typePassword ? (
        <Input.Password placeholder={placeholder} value={value} onChange={onchange} />
      ) : typeTextArea ? (
        <Input.TextArea
          // className="input-form"
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
          onChange={onChange}
        />
      ) : type === "number" ? (
        <InputNumber
          // className="input-form"
          style={{ width: "50%" }}
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
          min={1}
          autoFocus={false}
          onChange={onChange}
        />
      ) : (
        <Input
          // className="input-form"
          placeholder={placeholder}
          disabled={!disabled ? false : true}
          autoComplete="off"
          onChange={onChange}
          defaultValue={defaultValue}
        />
      )}
    </Form.Item>
  );
};

export default LabelInputUpdate;
