import React from "react";
import { GrAdd } from "react-icons/gr";

const TitleContent = ({ title }) => {
  return (
    <div className="title-filter-product" align="center" style={{ borderBottom: "1px solid #f2f2f2", height: "30px" }}>
      {title}
    </div>
  );
};
const Content = ({ title }) => {
  return (
    <div className="title-category-product-detail">
      <span>{title}</span>
      <GrAdd />
    </div>
  );
};
const listCategory = [
  { title: "Vợt cầu lông" },
  { title: "Giày cầu lông" },
  { title: "Áo cầu lông" },
  { title: "Phụ kiện" },
];
const CategoryComponent = () => {
  return (
    <div className="content-layout-filter-product">
      <TitleContent title="Danh mục sản phẩm" />
      {listCategory.map((items, key) => {
        return <Content title={items.title} key={key} />;
      })}
    </div>
  );
};

export default CategoryComponent;
