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
  const searchRedux = useSelector((state) => state.product.search);

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState();

  // const refSearch = useRef();
  // useEffect(() => {
  //   if (refSearch.current) {
  //     fetchData(searchRedux);
  //   }
  //   refSearch.current = true;
  // }, [searchRedux]);

  useEffect(() => {
    fetchData(searchRedux);
  }, [searchRedux]);

  const fetchData = async (search) => {
    setLoading(true);
    const result = await ProductServices.get_all_product(search);
    if (result?.EC === 0) {
      setListData(result?.DT);
    }
    if (search && search.length > 0) {
      notification.success({
        message: `Tìm được ${result?.DT?.total} sản phẩm`,
      });
    }
    // else {
    //   notification.success({
    //     message: `Không tìm thấy sản phẩm với tên: ${searchRedux}`,
    //   });
    // }
    setLoading(false);
  };

  const Content = ({ item, key }) => {
    {
      return (
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{ padding: "10px", fontSize: "14px", cursor: "pointer" }}
          key={key}
        >
          <NavLink to={"/san-pham/chi-tiet-san-pham"} className="name-product-page navlink">
            <div style={{ height: "207px" }}>
              <img src={item?.image} className="image-product" />
            </div>
            <div className="name-product-page">{item?.name}</div>
            <div style={{ color: "red", fontWeight: "500" }}>{isValidPrice(item?.price)}</div>
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
            {listData?.data?.map((item, key) => {
              return <Content item={item} key={key} />;
            })}
          </Row>
        </Spin>

        <div className="pagination">
          <Pagination align="center" defaultCurrent={listData?.pageCurrent} total={listData?.total} />
        </div>
      </Col>
    </Row>
  );
};

export default ContentProduct;
