import React, { useState } from "react";
import { Button, Col, Form, notification, Row, Spin } from "antd";
import TitlePageModule from "../../../components/TitlePageModule";
import LabelInput from "../../../components/LabelInput";
import { NavLink, useNavigate } from "react-router-dom";
import { isValidEmail, isValidPassword, isValidPhone } from "../../../utils/isValidInput";
import * as UserService from "../../../services/UserService";

const onFinishFailed = (errorInfo) => {
  // console.log("Failed:", errorInfo);
  notification.error({
    message: "Vui lòng nhập đầy đủ thông tin!",
  });
};
const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValid = (values) => {
    // console.log("Success:", values);
    const checkPassword = isValidPassword(values.password);
    const checkEmail = isValidEmail(values.email);
    const checkPhone = isValidPhone(values.phone);

    if (!checkEmail) {
      notification.error({
        message: "Email không đúng định dạng!",
      });
      return false;
    }
    if (!checkPhone) {
      notification.error({
        message: "Số điện thoại không đúng định dạng!",
      });
      return false;
    }
    if (values.password !== values.rePassword) {
      notification.error({
        message: "Vui lòng nhập lại đúng mật khẩu!",
      });
      return false;
    }
    if (!checkPassword) {
      notification.error({
        message: "Mật khẩu phải ít nhất 8 ký tự và gồm a-zA-Z@$!%*?&.,",
      });
      return false;
    }
    return true;
  };
  const onFinish = async (values) => {
    const check = isValid(values);
    if (check === true) {
      const result = await UserService.registerUser(values);
      setLoading(true);

      if (result?.EC === 0) {
        navigate("/dang-nhap");
        notification.success({
          message: result?.EM,
        });
      } else {
        notification.error({
          message: result?.EM,
        });
      }

      setLoading(false);
    }
  };

  return (
    <Row style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Spin tip="" spinning={loading}>
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
        </Spin>
      </Col>
    </Row>
  );
};

export default RegisterUser;
