import React, { useMemo, useState } from "react";
import { Button, Col, notification, Radio, Row, Spin } from "antd";
import { useSelector } from "react-redux";
import { isValidEmail, isValidPhone, isValidPrice } from "../../../utils/isValidInput";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import TitlePageComponent from "./../../../components/TitlePageComponent/index";
import GroupInput from "../../../components/GroupInput";
import { NavLink, useNavigate } from "react-router-dom";
import * as OrderService from "../../../services/OrderService";

const PaymentPage = () => {
  const order = useSelector((state) => state.order);
  const auth = useSelector((state) => state.auth.login);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [valueRadio, setValueRadio] = useState(1);
  const [valueInput, setValueInput] = useState({
    fullname: auth?.USER?.username,
    phone: auth?.USER?.phone,
    address: auth?.USER?.address,
    email: auth?.USER?.email,
    note: "",
  });

  const priceMemo = useMemo(() => {
    const result = order?.orderItemsSelected?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    if (Number(result)) {
      return result;
    }
    return 0;
  }, [order]);
  const deliveryPriceMemo = useMemo(() => {
    if (priceMemo === 0) {
      return 0;
    } else if ((priceMemo > 500000) & (priceMemo < 1000000)) {
      return 20000;
    } else if (priceMemo > 1000000) {
      return 10000;
    } else {
      return 30000;
    }
  }, [priceMemo]);
  const totalPriceMemo = useMemo(() => {
    return Number(priceMemo + deliveryPriceMemo);
  }, [deliveryPriceMemo, priceMemo]);

  const onChangeRadio = (e) => {
    setValueRadio(e.target.value);
  };
  const checkValidInput = () => {
    if (!valueInput.fullname) {
      notification.error({
        message: "Người nhận hàng chưa có!",
      });
      return false;
    }
    if (!valueInput.phone) {
      notification.error({
        message: "Số điện thoại chưa có!",
      });
      return false;
    }
    if (!valueInput.address) {
      notification.error({
        message: "Địa chỉ chưa có!",
      });
      return false;
    }
    if (!valueInput.email) {
      notification.error({
        message: "Email chưa có!",
      });
      return false;
    }
    const checkEmail = isValidEmail(valueInput?.email);
    if (checkEmail === false) {
      notification.error({
        message: "Email chưa đúng định dạng!",
      });
      return false;
    }
    // const checkPhone = isValidPhone(valueInput?.phone);
    // if (checkPhone === false) {
    //   notification.error({
    //     message: "Số điện thoại chưa đúng định dạng!",
    //   });
    //   return false;
    // }
    return true;
  };
  const handlePurchase = async () => {
    const data = {
      fullname: valueInput?.fullname,
      address: valueInput?.address,
      phone: valueInput?.phone,
      paymentMethod: valueRadio && valueRadio === 1 ? "COD" : "PANK",
      orderItems: order?.orderItemsSelected,
      shippingPrice: deliveryPriceMemo ? deliveryPriceMemo : 0,
      itemsPrice: priceMemo ? priceMemo : 0,
      totalPrice: totalPriceMemo,
      userId: auth?.USER?._id,
    };
    const check = checkValidInput();
    if (check === true) {
      setLoading(true);
      const result = await OrderService.create(data, auth?.ACCESS_TOKEN);
      if (result?.EC === 0) {
        notification.success({
          message: result?.EM,
        });
        navigate("/thanh-vien");
      } else {
        notification.error({
          message: result?.EM,
        });
      }
    }
    setLoading(false);
  };

  return (
    <div>
      {/* <TitlePageComponent pageName={"Mua hàng"} pagePath={"/payment"} /> */}

      <Row style={{ padding: "10px" }}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="title-payment-left">Thông tin người nhận hàng</div>
              <div style={{ padding: "10px" }}>
                <GroupInput
                  name={"username"}
                  label="Họ và tên người nhận hàng"
                  onChange={(e) => setValueInput({ ...valueInput, fullname: e.target.value })}
                  fail={!valueInput.fullname ? false : true}
                  value={valueInput.fullname}
                />
                <GroupInput
                  name={"phone"}
                  label="Số điện thoại"
                  onChange={(e) => setValueInput({ ...valueInput, phone: e.target.value })}
                  fail={!valueInput.phone ? false : true}
                  value={valueInput.phone}
                />
                <GroupInput
                  name={"address"}
                  label="Địa chỉ"
                  onChange={(e) => setValueInput({ ...valueInput, address: e.target.value })}
                  fail={!valueInput.address ? false : true}
                  value={valueInput.address}
                />
                <GroupInput
                  name={"email"}
                  label="Email"
                  onChange={(e) => setValueInput({ ...valueInput, email: e.target.value })}
                  fail={!valueInput.email ? false : true}
                  value={valueInput.email}
                />
                <GroupInput
                  name={"note"}
                  label="Ghi chú đơn hàng (tùy chỉnh)"
                  onChange={(e) => setValueInput({ ...valueInput, note: e.target.value })}
                  fail={!valueInput.note ? true : true}
                  value={valueInput.note}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="title-payment-left">Thanh toán</div>
              <div className="body-thanhtoan">
                <div style={{ border: "1.4px solid #d1c5c5", borderRadius: "5px", padding: "10px" }}>
                  <Radio.Group onChange={onChangeRadio} value={valueRadio} style={{ width: "100%" }}>
                    <div className="align-items-between">
                      <Radio value={1}>
                        <label>Thanh toán khi nhận hàng (COD)</label>
                      </Radio>
                      <FaRegMoneyBillAlt color="#E95211" size={25} />
                    </div>
                    <div className="align-items-between">
                      <Radio value={2}>
                        <label>Thanh toán qua ngân hàng</label>
                      </Radio>
                      <BsBank2 color="#E95211" size={25} />
                    </div>
                  </Radio.Group>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{ background: "#FAFAFA" }}>
          <div className="title-payment-right">Đơn hàng ({order?.orderItemsSelected?.length} sản phẩm)</div>
          {order?.orderItemsSelected?.map((items, index) => {
            return (
              <NavLink to={`/chi-tiet-san-pham/${items.product}`} key={index}>
                <Row className="" style={{ padding: "10px", color: "#4B4B4B", height: "80px" }}>
                  <Col xs={2} sm={2} md={2} lg={4} xl={4} className="image-payment">
                    <img src={items?.image} style={{ width: "100%", height: "80%", objectFit: "scale-down" }} />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={16} xl={16} style={{ alignContent: "center", padding: "10px" }}>
                    {items?.name} - {items?.color} - {items?.size} - Số lượng: {items?.amount}
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={4} xl={4} style={{ alignContent: "center" }}>
                    {isValidPrice(items?.price)}
                  </Col>
                </Row>
              </NavLink>
            );
          })}
          <Row className="title-payment-sum">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              Tạm tính
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ color: "red", textAlign: "right" }}>
              {isValidPrice(priceMemo)}
            </Col>
          </Row>
          <Row className="title-payment-deli">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              Phí giao hàng
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ color: "red", textAlign: "right" }}>
              {isValidPrice(deliveryPriceMemo)}
            </Col>
          </Row>

          <Row className="title-payment-sum">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              Tổng cộng
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ color: "red", textAlign: "right" }}>
              {isValidPrice(totalPriceMemo)}
            </Col>
          </Row>
          <Spin spinning={loading}>
            <NavLink to={"/gio-hang"}>
              <Button className="button-submit">Sửa giỏ hàng</Button>
            </NavLink>
            <Button className="button-submit" onClick={handlePurchase}>
              Mua hàng
            </Button>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentPage;
