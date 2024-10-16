import { Form } from "antd";
import React from "react";

const FormComponent = ({ form, name, children, validateMessages, onFinish, onFinishFailed, ...rests }) => {
  return (
    <Form
      {...rests}
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
