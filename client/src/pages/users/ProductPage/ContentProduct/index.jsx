import { Col, notification, Pagination, Popover, Row, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaSortAmountDown, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import * as ProductServices from "../../../../services/ProductService";
import { isValidPrice } from "../../../../utils/isValidInput";
import { useSelector } from "react-redux";

const TitlePage = ({ title }) => {
  const contentSort = (
    <div style={{ margin: "0", padding: "0" }}>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Giá tăng dần</p>
      </NavLink>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Giá giảm dần</p>
      </NavLink>
      <NavLink className="navlink-button-header" to={"/san-pham/"}>
        <p className="header-button-hover">Hàng mới nhất</p>
      </NavLink>
    </div>
  );
  return (
    <Row className="title-content-product-page" justify="space-between">
      <span>{title}</span>

      <div
        className="align-items-center"
        style={{
          textTransform: "capitalize",
          fontWeight: "500",
          fontSize: "13px",
        }}
      >
        <FaSortAmountDown style={{ padding: "0 2px", alignContent: "center", fontSize: "16px" }} />
        sắp xếp:
        <Popover content={contentSort} placement="bottomRight" trigger="hover" className="align-items-center">
          <span style={{ fontWeight: "400", paddingLeft: "5px", cursor: "pointer" }}>Mặc định</span>{" "}
          <FaChevronDown style={{ padding: " 0 4px", alignContent: "center", fontSize: "16px" }} />
        </Popover>
      </div>
    </Row>
  );
};

const ContentProduct = () => {
  const [current, setCurrent] = useState(0);
  const searchRedux = useSelector((state) => state.product.search);

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState();

  useEffect(() => {
    fetchData(searchRedux, current);
  }, [searchRedux, current]);

  const fetchData = async (search, page) => {
    setLoading(true);
    const result = await ProductServices.get_all_product(search, page);
    if (result?.EC === 0) {
      setListData(result?.DT);
    }
    if (search && search.length > 0) {
      notification.success({
        message: `Tìm được ${result?.DT?.total} sản phẩm`,
      });
    }

    setLoading(false);
  };
  const onChange = (page) => {
    setCurrent(page - 1);
  };

  const Content = ({ item }) => {
    {
      return (
        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "10px", fontSize: "14px", cursor: "pointer" }}>
          <NavLink to={`/chi-tiet-san-pham/${item._id}`} className="name-product-page navlink">
            <div style={{ height: "207px" }}>
              <img src={item?.image} className="image-product" />
            </div>
            <div className="name-product-page">{item?.name}</div>
            <div style={{ color: "red", fontWeight: "500" }}>
              {isValidPrice(item?.price)}{" "}
              <span style={{ color: "#acacac", fontSize: "14px", textDecoration: "line-through" }}>
                {isValidPrice(item?.price)}
              </span>
            </div>
          </NavLink>
        </Col>
      );
    }
  };
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={23}>
        <TitlePage title="Vợt cầu lông" />

        <Spin spinning={loading}>
          <Row className="main-product-page-product">
            {listData?.data?.map((item, index) => {
              return <Content item={item} key={index} />;
            })}
          </Row>
        </Spin>

        <div className="pagination">
          <Pagination
            align="center"
            defaultCurrent={listData?.pageCurrent}
            total={listData?.total}
            current={listData?.pageCurrent}
            onChange={onChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ContentProduct;
