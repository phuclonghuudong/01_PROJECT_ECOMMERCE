import { Button, Checkbox, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { listColor, listSize, listType } from "../../../../routes/ListData";

const TitleContent = ({ title }) => {
  return <div className="title-filter-product">{title}</div>;
};

const LayoutFilter = () => {
  const [checkFilter, setCheckFilter] = useState({
    type: [],
    color: [],
    size: [],
  });
  const [checkType, setCheckType] = useState([]);
  const [checkColor, setCheckColor] = useState([]);
  const [checkSize, setCheckSize] = useState([]);
  const [checked, setChecked] = useState(true);

  // console.log("checkFilter", checkFilter);
  // console.log("checkType", checkType);
  // console.log("checkColor", checkColor);
  // console.log("checkSize", checkSize);

  useEffect(() => {
    setCheckFilter({ ...checkFilter, size: checkSize, color: checkColor, type: checkType });
  }, [checkColor, checkSize, checkType, checked]);

  const onChangeType = (e) => {
    setCheckType(e);
    setChecked(checked);
  };
  const onChangeColor = (checkedValues) => {
    setCheckColor(checkedValues);
    setChecked(checked);
  };
  const onChangeSize = (checkedValues) => {
    setCheckSize(checkedValues);
    setChecked(checked);
  };
  const handleDeleteAllFilter = () => {
    setChecked(!checked);
    setCheckColor([]);
    setCheckSize([]);
    setCheckType([]);
  };
  const handleDeleteItemFilter = (check, items) => {
    if (check === "TYPE") {
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

  const Filter = () => {
    return (
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
          <Checkbox.Group
            style={{
              width: "100%",
              display: "grid",
            }}
            onChange={onChangeType}
            checked={false}
          >
            {listType?.map((items, index) => {
              return (
                <div style={{ marginBottom: "10px", position: "relative" }} key={index}>
                  <Checkbox value={items?.id}>{items?.name}</Checkbox>
                </div>
              );
            })}
          </Checkbox.Group>
        </div>

        <div className="content-layout-filter-product">
          <TitleContent title="Màu sắc" />
          <Checkbox.Group
            style={{
              width: "100%",
              display: "grid",
            }}
            onChange={onChangeColor}
          >
            {listColor.map((items, index) => {
              return (
                <div style={{ marginBottom: "10px", position: "relative" }} key={index}>
                  <Checkbox checked={checked} value={items?.id}>
                    {items?.name}
                  </Checkbox>
                </div>
              );
            })}
          </Checkbox.Group>
        </div>

        <div className="content-layout-filter-product">
          <TitleContent title="Kích thước" />
          <Checkbox.Group
            style={{
              width: "100%",
              display: "grid",
            }}
            onChange={onChangeSize}
          >
            {listSize.map((items, index) => {
              return (
                <div style={{ marginBottom: "10px", position: "relative" }} key={index}>
                  <Checkbox checked={checked} value={items?.id}>
                    {items?.name}
                  </Checkbox>
                </div>
              );
            })}
          </Checkbox.Group>
        </div>
      </Col>
    </Row>
  );
};

export default LayoutFilter;
