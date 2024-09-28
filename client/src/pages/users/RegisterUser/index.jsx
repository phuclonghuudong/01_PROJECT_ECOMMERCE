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

const RegisterUser = () => {
  return (
    <Row style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <TitlePageModule title={"Đăng ký"} />
        <div align="center">
          <NavLink className={"navlink"} to={"/dang-nhap"}>
            <span>Đã có tài khoản, tiến hành đăng nhập</span>
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
              label={"Email"}
              name={"email"}
              message={"Please input your email!"}
              typePassword={false}
              placeholder={"Email ...."}
            />
            <LabelInput
              label={"Phone"}
              name={"phone"}
              message={"Please input your phone!"}
              typePassword={false}
              placeholder={"Phone ...."}
            />
            <LabelInput
              label={"Password"}
              name={"password"}
              message={"Please input your password!"}
              typePassword={true}
              placeholder={"Password ...."}
            />
            <LabelInput
              label={"Confirm Password"}
              name={"rePassword"}
              message={"Please input your confirm password!"}
              typePassword={true}
              placeholder={"Confirm Password ...."}
            />

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="button-submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterUser;
