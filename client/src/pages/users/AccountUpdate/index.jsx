import React, { useEffect } from "react";
import { Button, Col, Form, notification, Row } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import LabelInput from "./../../../components/LabelInput/index";
import { useSelector } from "react-redux";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const AccountUpdate = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.login);
  useEffect(() => {
    if (!auth?.USER) {
      notification.warning({
        message: "Bạn cần đăng nhập để thực hiện thao tác này!",
      });
      navigate("/dang-nhap");
    }
  }, []);

  return (
    <Row style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="title-page-account">Trang Thông tin tài khoản</div>
        <NavLink to={"/thanh-vien"}>
          <Button className="button-submit"> Quay lại</Button>
        </NavLink>

        <div style={{ margin: "10px" }}>
          <div className="title-page-account">Thông tin tài khoản</div>
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
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
              message={"Please input your username!"}
              typePassword={false}
              placeholder={auth?.USER?.email}
              disabled
            />
            <LabelInput
              label={"UserName"}
              name={"username"}
              message={"Please input your username!"}
              typePassword={false}
              placeholder={auth?.USER?.username ? auth?.USER?.username : "Username ...."}
            />
            <LabelInput
              label={"Phone"}
              name={"phone"}
              message={"Please input your phone!"}
              typePassword={false}
              placeholder={auth?.USER?.phone ? auth?.USER?.phone : "Phone...."}
            />
            <LabelInput
              label={"Address"}
              name={"address"}
              message={"Please input your address!"}
              typePassword={false}
              placeholder={auth?.USER?.address ? auth?.USER?.address : "Address ...."}
            />

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="button-submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div style={{ margin: "10px" }}>
          <div className="title-page-account">Đổi mật khẩu</div>
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
              label={"Mật khẩu hiện tại"}
              name={"password"}
              message={"Please input your password!"}
              typePassword={true}
              placeholder={"Password ...."}
            />
            <LabelInput
              label={"Mật khẩu mới"}
              name={"newPassword"}
              message={"Please input your new password!"}
              typePassword={true}
              placeholder={"New Password ...."}
            />
            <LabelInput
              label={"Nhập lại mật khẩu mới"}
              name={"reNewPassword"}
              message={"Please input your new confirm password!"}
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
                Đổi mật khẩu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AccountUpdate;
