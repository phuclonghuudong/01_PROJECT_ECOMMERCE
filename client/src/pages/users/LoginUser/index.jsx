import React, { useState } from "react";
import { Button, Col, Form, notification, Row, Spin } from "antd";
import TitlePageModule from "../../../components/TitlePageModule";
import LabelInput from "../../../components/LabelInput";
import { NavLink, useNavigate } from "react-router-dom";
import * as UserServices from "../../../services/UserService";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { loginRedux } from "../../../redux/auth.slice";

const onFinishFailed = (errorInfo) => {
  // console.log("Failed:", errorInfo);
  notification.error({
    message: "Vui lòng nhập đầy đủ thông tin!",
  });
};
const LoginUser = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    setLoading(true);
    const result = await UserServices.loginUser(values);

    if (result?.EC === 0) {
      localStorage.setItem("access_token", result?.DT?.ACCESS_TOKEN);
      notification.success({
        message: result?.EM,
      });

      if (result?.DT?.ACCESS_TOKEN) {
        const decoded = jwtDecode(result?.DT?.ACCESS_TOKEN);

        if (decoded?.id) {
          const getUser = await UserServices.getDetailUser(decoded?.id, result?.DT?.ACCESS_TOKEN);
          if (getUser?.data?.EC === 0) {
            dispatch(loginRedux({ USER: getUser?.data?.DT, ACCESS_TOKEN: result?.DT?.ACCESS_TOKEN }));
          }
        }
      }
      navigate("/");
    } else {
      notification.error({
        message: result?.EM,
      });
    }
    setLoading(false);
  };
  return (
    <Row style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Spin tip="" spinning={loading}>
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
                label={"Email"}
                name={"email"}
                message={"Please input your email!"}
                typePassword={false}
                placeholder={"Email ...."}
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
        </Spin>
      </Col>
    </Row>
  );
};

export default LoginUser;
