import { Form } from "antd";
import React from "react";

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
const FormComponent = ({ form, name, children, validateMessages, onFinish, onFinishFailed, ...rests }) => {
  return (
    <Form
      {...rests}
      // {...formItemLayout}
      form={form}
      name={name}
      validateMessages={validateMessages}
      variant="filled"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}
    </Form>
  );
};

export default FormComponent;
