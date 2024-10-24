import { Button, Checkbox, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { listColor, listSize, listType } from "../../../../routes/ListData";
import { useDispatch } from "react-redux";
import { filterColorRedux, filterSizeRedux, filterTypeRedux } from "../../../../redux/product.slice";

const TitleContent = ({ title }) => {
  return <div className="title-filter-product">{title}</div>;
};

const LayoutFilter = () => {
  const dispatch = useDispatch();

  const [checkType, setCheckType] = useState([]);
  const [checkColor, setCheckColor] = useState([]);
  const [checkSize, setCheckSize] = useState([]);
  // useEffect(() => {
  //   dispatch(filterTypeRedux(checkType));
  //   dispatch(filterSizeRedux(checkSize));
  //   dispatch(filterColorRedux(checkColor));
  // }, [checkColor, checkSize, checkType]);

  const onChangeChecked = (type, e) => {
    if (type === "TYPE") {
      if (checkType.includes(e.target.value)) {
        const newChecked = checkType.filter((item) => item !== e.target.value);
        setCheckType(newChecked);
      } else {
        setCheckType([...checkType, e.target.value]);
      }
    }
    if (type === "COLOR") {
      if (checkColor.includes(e.target.value)) {
        const newChecked = checkColor.filter((item) => item !== e.target.value);
        setCheckColor(newChecked);
      } else {
        setCheckColor([...checkColor, e.target.value]);
      }
    }
    if (type === "SIZE") {
      if (checkSize.includes(e.target.value)) {
        const newChecked = checkSize.filter((item) => item !== e.target.value);
        setCheckSize(newChecked);
      } else {
        setCheckSize([...checkSize, e.target.value]);
      }
    }
  };
  const handleDeleteItemFilter = (check, items) => {
    if (check === "TYPE") {
      console.log("1232", items);
      checkType.splice(checkType.indexOf(items), 1);
      setCheckType([...checkType]);
    }
    if (check === "COLOR") {
      checkColor.splice(checkColor.indexOf(items), 1);
      setCheckColor([...checkColor]);
    }
    if (check === "SIZE") {
      checkSize.splice(checkSize.indexOf(items), 1);
      setCheckSize([...checkSize]);
    }
  };
  const handleDeleteAllFilter = () => {
    setCheckType([]);
    setCheckColor([]);
    setCheckSize([]);
  };

  const Filter = () => {
    return checkType.length <= 0 && checkColor.length <= 0 && checkSize.length <= 0 ? (
      ""
    ) : (
      <div className="content-layout-filter-product">
        <div className="title-filter-product align-items-center">
          <p style={{ color: "#E95221" }}>Bạn chọn</p>
          <Button className="button" onClick={handleDeleteAllFilter}>
            Bỏ hết
            <IoClose style={{ fontSize: "15px", fill: "#666" }} />
          </Button>
        </div>
        <div>
          {checkType?.length > 0 &&
            checkType?.map((items, index) => {
              return (
                <Button
                  className="button button-filter"
                  key={index}
                  onClick={() => handleDeleteItemFilter("TYPE", items)}
                >
                  <IoClose style={{ fontSize: "15px", fill: "#666" }} />
                  {items}
                </Button>
              );
            })}
          {checkColor?.length > 0 &&
            checkColor?.map((items, index) => {
              return (
                <Button
                  className="button button-filter"
                  key={index}
                  onClick={() => handleDeleteItemFilter("COLOR", items)}
                >
                  <IoClose style={{ fontSize: "15px", fill: "#666" }} />
                  {items}
                </Button>
              );
            })}
          {checkSize?.length > 0 &&
            checkSize?.map((items, index) => {
              return (
                <Button
                  className="button button-filter"
                  key={index}
                  onClick={() => handleDeleteItemFilter("SIZE", items)}
                >
                  <IoClose style={{ fontSize: "15px", fill: "#666" }} />
                  {items}
                </Button>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={22} xl={22} className="layout-filter-product">
        <Filter />

        <div className="content-layout-filter-product">
          <TitleContent title="Loại Sản phẩm" />
          <div
          // style={{
          //   width: "100%",
          //   display: "grid",
          // }}
          >
            {listType?.map((items, index) => {
              return (
                <Checkbox
                  onChange={(e) => onChangeChecked("TYPE", e)}
                  value={items?.id}
                  checked={checkType.includes(items?.id)}
                  style={{ marginBottom: "10px", position: "relative" }}
                  key={index}
                >
                  {items?.name}
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="content-layout-filter-product">
          <TitleContent title="Màu sắc" />
          <div
          // style={{
          //   width: "100%",
          //   display: "grid",
          // }}
          >
            {listColor?.map((items, index) => {
              return (
                <Checkbox
                  onChange={(e) => onChangeChecked("COLOR", e)}
                  value={items?.id}
                  checked={checkColor.includes(items?.id)}
                  style={{ marginBottom: "10px", position: "relative" }}
                  key={index}
                >
                  {items?.name}
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="content-layout-filter-product">
          <TitleContent title="Kích thước" />
          <div
          // style={{
          //   width: "100%",
          //   display: "grid",
          // }}
          >
            {listSize?.map((items, index) => {
              return (
                <Checkbox
                  onChange={(e) => onChangeChecked("SIZE", e)}
                  value={items?.id}
                  checked={checkSize.includes(items?.id)}
                  style={{ marginBottom: "10px", position: "relative" }}
                  key={index}
                >
                  {items?.name}
                </Checkbox>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LayoutFilter;
