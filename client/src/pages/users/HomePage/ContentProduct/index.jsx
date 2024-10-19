import { Col, notification, Pagination, Popover, Row, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaSortAmountDown, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import * as ProductServices from "../../../../services/ProductService";
import { isValidPrice } from "../../../../utils/isValidInput";
import { useSelector } from "react-redux";

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
    const limit = 12;
    const result = await ProductServices.get_all_product(search, page, limit);
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

  const Content = ({ item, key }) => {
    {
      return (
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          style={{ padding: "10px", fontSize: "14px", cursor: "pointer" }}
          key={key}
        >
          <NavLink to={"/san-pham/chi-tiet-san-pham"} className="name-product-page navlink">
            <div style={{ height: "207px" }}>
              <img src={item?.image} className="image-product" style={{ width: "90%" }} />
            </div>
            <div className="name-product-page" style={{ margin: "2px 0" }}>
              {item?.name}
            </div>
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
    <Row style={{ height: "100%", margin: "20px", alignItems: "center" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Spin spinning={loading}>
          <Row className="main-product-page-product">
            {listData?.data?.map((item, key) => {
              return <Content item={item} key={key} />;
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
