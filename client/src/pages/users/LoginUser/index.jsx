import React from "react";
import { Button, Col, Form, Row } from "antd";
import TitlePageModule from "../../../components/TitlePageModule";
import LabelInput from "../../../components/LabelInput";
import { NavLink } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginUser = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <TitlePageModule title={"Đăng nhập"} />
        <div align="right">
          <NavLink className={"navlink"} to={"/dang-ky"} style={{ paddingRight: "4px" }}>
            <span>Quên mật khẩu</span>
          </NavLink>
          <NavLink className={"navlink"} to={"/dang-ky"}>
            <span>Đăng ký tại đây</span>
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <LabelInput
              label={"UserName"}
              name={"username"}
              message={"Please input your username!"}
              typePassword={false}
              placeholder={"Username ...."}
            />
            <LabelInput
              label={"Password"}
              name={"password"}
              message={"Please input your password!"}
              typePassword={true}
              placeholder={"Password ...."}
            />

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="button-submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginUser;
