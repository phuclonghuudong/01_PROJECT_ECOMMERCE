import React, { useState } from "react";
import TitlePageComponent from "./../../../components/TitlePageComponent/index";
import { Button, Checkbox, Col, notification, Row } from "antd";
import GroupQuantity from "./../../../components/GroupQuantity/index";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isValidPrice } from "../../../utils/isValidInput";
import { MdDeleteForever } from "react-icons/md";
import { decreaseAmount, increaseAmount, removeOrderProduct, removeAllOrderProduct } from "../../../redux/order.slice";

const CartPage = () => {
  const order = useSelector((state) => state.order);
  const [listChecked, setListChecked] = useState([]);
  const dispatch = useDispatch();

  const handleDeleteOrderProduct = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }));
  };
  const handleChangeQuantity = (type, idProduct) => {
    if (type === "INCREASE") {
      dispatch(increaseAmount({ idProduct }));
    } else {
      dispatch(decreaseAmount({ idProduct }));
    }
  };

  const handleOnChangeCheckedAll = (e) => {
    console.log("e", e.target.checked);
    if (e.target.checked) {
      const newChecked = [];
      order?.orderItems?.forEach((item) => {
        newChecked.push(item?.product);
      });
      setListChecked(newChecked);
    } else {
      setListChecked([]);
    }
  };
  const onChangeChecked = (e) => {
    if (listChecked.includes(e.target.value)) {
      const newChecked = listChecked.filter((item) => item !== e.target.value);
      setListChecked(newChecked);
    } else {
      setListChecked([...listChecked, e.target.value]);
    }
  };
  const handleClearOrder = () => {
    if (listChecked?.length >= 1) {
      dispatch(removeAllOrderProduct({ listChecked }));
      notification.success({
        message: "Bạn xóa thành công sản phẩm ra khỏi giỏ hàng.",
      });
    }
    if (listChecked?.length <= 0) {
      notification.warning({
        message: "Bạn chưa chọn!",
      });
    }
  };

  return (
    <div>
      <TitlePageComponent pageName={"Giỏ hàng"} pagePath={"/gio-hang"} />

      <Row style={{ padding: "10px", height: "100%" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ padding: "10px" }}>
          <div className="title-cart">Giỏ hàng của bạn</div>
          <div className="title-cart-child">
            {order?.orderItems?.length > 0 ? (
              <Row className="cart-product" style={{ border: "none" }}>
                <Col
                  xs={5}
                  sm={5}
                  md={5}
                  lg={4}
                  xl={4}
                  style={{ display: "flex", justifyContent: "center", alignContent: "start" }}
                >
                  <Checkbox
                    onChange={handleOnChangeCheckedAll}
                    checked={listChecked?.length === order?.orderItems?.length}
                    style={{ paddingRight: "10px" }}
                  />
                  {order?.orderItems?.length > 0 ? `Có ${order?.orderItems?.length} sản phẩm` : "Chưa có sản phẩm nào"}
                </Col>

                <Col xs={18} sm={18} md={18} lg={19} xl={19}>
                  <Row style={{ justifyContent: "center", alignItems: "center", display: "flex", textAlign: "center" }}>
                    <Col xs={16} sm={14} md={12} lg={9} xl={9} className="name-product-cart ">
                      Tên sản phẩm - Size - Color
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={4} xl={4} className="size-product-cart">
                      Đơn giá
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                      Số lượng
                    </Col>
                    <Col
                      xs={8}
                      sm={10}
                      md={12}
                      lg={5}
                      xl={5}
                      className="price-product-cart"
                      style={{ textAlign: "right", padding: "0 10px" }}
                    >
                      Thành tiền
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{ textAlign: "right", padding: "0 10px" }}></Col>
                  </Row>
                </Col>
                <Col
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  xl={1}
                  style={{ textAlign: "right", padding: "0", fontSize: "22px", color: "black", cursor: "pointer" }}
                >
                  <MdDeleteForever onClick={() => handleClearOrder()} />
                </Col>
              </Row>
            ) : (
              "Chưa có sản phẩm trong giỏ hàng"
            )}
          </div>

          <div className="cart-product-body">
            {order?.orderItems?.length > 0 &&
              order?.orderItems?.map((items, index) => {
                return (
                  <Row className="cart-product" key={index}>
                    <Col
                      xs={5}
                      sm={5}
                      md={5}
                      lg={4}
                      xl={4}
                      // className="layout-center"
                      style={{ display: "flex", justifyContent: "center", alignContent: "start" }}
                    >
                      <Checkbox
                        onChange={onChangeChecked}
                        value={items?.product}
                        checked={listChecked.includes(items?.product)}
                      />

                      <img src={items?.image} style={{ height: "auto", width: "70%", paddingLeft: "10px" }} />
                    </Col>

                    <Col xs={18} sm={18} md={18} lg={20} xl={20}>
                      <Row
                        style={{ justifyContent: "center", alignItems: "center", display: "flex", textAlign: "center" }}
                      >
                        <Col xs={24} sm={22} md={22} lg={9} xl={9} className="name-product-cart">
                          {items?.name + " - " + items?.size + " - " + items?.color}
                        </Col>
                        <Col
                          xs={24}
                          sm={22}
                          md={22}
                          lg={4}
                          xl={4}
                          className="size-product-cart"
                          style={{ textAlign: "center" }}
                        >
                          {isValidPrice(items?.price)}
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={5} xl={5}>
                          <div style={{ padding: "10px" }}>
                            <div style={{ alignItems: "center", display: "flex", justifyContent: "start" }}>
                              <button
                                className={items?.amount <= 1 ? "button-quantity-disabled" : "button-quantity"}
                                onClick={() => handleChangeQuantity("DECREASE", items?.product)}
                                disabled={items?.amount <= 1 ? true : false}
                              >
                                -
                              </button>
                              <input
                                className={"input-quantity"}
                                value={items?.amount}
                                defaultValue={items?.amount}
                                disabled
                              />
                              <button
                                // className={
                                //   items?.amount >= items?.amount ? "button-quantity-disabled" : "button-quantity"
                                // }
                                className="button-quantity"
                                onClick={() => handleChangeQuantity("INCREASE", items?.product)}
                                // disabled={items?.amount >= items?.amount ? true : false}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </Col>

                        <Col
                          xs={24}
                          sm={10}
                          md={10}
                          lg={5}
                          xl={5}
                          className="price-product-cart "
                          style={{ textAlign: "right", padding: "0 10px" }}
                        >
                          {isValidPrice(items?.price * items?.amount)}
                        </Col>
                        <Col
                          xs={0}
                          sm={0}
                          md={0}
                          lg={1}
                          xl={1}
                          style={{
                            textAlign: "right",
                            padding: "0",
                            fontSize: "22px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          <MdDeleteForever onClick={() => handleDeleteOrderProduct(items?.product)} />
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      md={1}
                      lg={0}
                      xl={0}
                      style={{ textAlign: "right", padding: "0", fontSize: "22px", color: "red", cursor: "pointer" }}
                    >
                      <MdDeleteForever onClick={() => handleDeleteOrderProduct(items?.product)} />
                    </Col>
                  </Row>
                );
              })}
          </div>
          <Row className="cart-footer">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              TỔNG TIỀN
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "right" }}>
              <span style={{ color: "red" }}>
                2.999.000 <span className="text-price-underline">đ</span>
              </span>
            </Col>
          </Row>

          <NavLink to={"/san-pham"}>
            <Button className="button-submit">Tiếp tục mua hàng</Button>
          </NavLink>
          <NavLink to={"/san-pham"}>
            <Button className="button-submit">Mua hàng</Button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
