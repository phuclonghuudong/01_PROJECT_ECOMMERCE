import React, { useEffect, useState } from "react";
import product01 from "../../../../assets/product01.png";
import { Col, Empty, notification, Progress, Row } from "antd";
import GroupQuantity from "../../../../components/GroupQuantity";
import { FaCheckCircle } from "react-icons/fa";
import ButtonSubmit from "./../../../../components/ButtonSubmit/index";
import * as ProductServices from "../../../../services/ProductService";
import { useNavigate } from "react-router-dom";
import { isValidPrice } from "../../../../utils/isValidInput";
import { listSize } from "../../../../routes/ListData";
import { useDispatch, useSelector } from "react-redux";
import { addOrderProduct } from "../../../../redux/order.slice";

const ContentProduct = ({ id }) => {
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const auth = useSelector((state) => state.auth.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    if (!auth?.USER) {
      notification.warning({
        message: "Bạn cần phải đăng nhập trước thực hiện thao tác này!",
      });
      navigate("/dang-nhap");
    } else {
      dispatch(
        addOrderProduct({
          orderItems: {
            name: data?.name,
            amount: quantity,
            size: data?.size,
            color: data?.color,
            image: data?.image,
            price: data?.price,
            product: data?._id,
          },
        })
      );
      notification.success({
        message: "Thêm vào giỏ hàng thành công!",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await ProductServices.get_details_product(id);
      if (result?.EC === 0) {
        setData(result?.DT);
      } else {
        notification.error({
          message: result?.EM,
        });
        navigate("/san-pham");
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          {data ? (
            <div style={{ textAlign: "center", justifyContent: "center" }}>
              <img src={data?.image} style={{ height: "300px", cursor: "pointer", objectFit: "cover" }} />
            </div>
          ) : (
            <Empty description={false} />
          )}
        </Col>

        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <Row style={{ padding: "20px", display: "flow" }}>
            <Col style={{ lineHeight: "2", fontSize: "14px" }}>
              {data ? (
                <>
                  <div style={{ fontSize: "26px", fontWeight: "600" }}>
                    {data?.name + " " + data?.color + " " + data?.size}
                  </div>
                  <div>
                    Mã: <span style={{ color: "#E95221", textTransform: "uppercase" }}>{data?.id}</span>
                  </div>
                  <div>
                    Thương hiệu: <span style={{ color: "#E95221" }}>{data?.type}</span>
                  </div>
                  <div>
                    Tình trạng:{" "}
                    <span style={{ color: "#E95221" }}>
                      {data?.countInStock > 0 ? `Còn ${data?.countInStock} sản phẩm` : "Sản phẩm đã hết hàng."}
                    </span>
                  </div>
                  <div style={{ borderBottom: "1px solid #DDE1EF", paddingBottom: "5px" }}>
                    <span style={{ color: "#e8002d", fontSize: "22px", fontWeight: "bold", paddingRight: "5px" }}>
                      {data && isValidPrice(data?.price)}
                    </span>
                    <span style={{ color: "#acacac", fontSize: "16px", paddingRight: "5px" }}>Giá niêm yết:</span>
                    <span style={{ color: "#acacac", fontSize: "16px", textDecoration: "line-through" }}>
                      {data?.price && isValidPrice(data?.price)}
                    </span>
                  </div>
                  <div style={{ paddingBottom: "10px" }}>
                    <div className="">Chọn size:</div>
                    {listSize.map((items, index) => {
                      return (
                        <button
                          type="button"
                          className={items?.status ? "button-size-disabled" : "button-size"}
                          key={index}
                        >
                          {items?.name}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ paddingBottom: "10px" }}>
                    <div className="e">Chọn màu sắc:</div>
                    <Row>
                      <Col xs={11} sm={8} md={8} lg={10} xl={8} style={{ margin: "5px" }}>
                        <Row className={"" ? "layout-button-color-click" : "layout-button-color"}>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img src={product01} style={{ width: "100%", paddingTop: "10px" }} />
                          </Col>
                          <Col
                            xs={18}
                            style={{
                              fontSize: "13px",
                              fontWeight: "500",
                              justifyContent: "center",
                              display: "grid",
                            }}
                          >
                            <div style={{ alignItems: "center", justifyContent: "space-between", display: "flex" }}>
                              <FaCheckCircle style={{ color: `${"" ? "green" : ""}`, fontSize: "16px" }} />
                              {data?.color}
                            </div>
                            <div style={{ color: "#dc3545" }}>{isValidPrice(data?.price)}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <GroupQuantity
                      countInStock={Number(data.countInStock)}
                      number={quantity}
                      onclickSubtraction={() => setQuantity(quantity - 1)}
                      onclickAddition={() => setQuantity(quantity + 1)}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <Row style={{ margin: "20px 0" }}>
                    <ButtonSubmit title={"Mua ngay"} bgColor={"#FFB916"} />
                    <ButtonSubmit onClick={handleAddOrder} title={"Thêm vào giỏ hàng"} />

                    <ButtonSubmit title={"Thanh toán thẻ"} bgColor={"#288AD6"} />
                    <ButtonSubmit title={"Mua trả góp"} bgColor="#F1EB1F" />
                  </Row>{" "}
                </>
              ) : (
                <Empty description={false} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContentProduct;
