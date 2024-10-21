import React from "react";
import { GrAdd } from "react-icons/gr";
import { listType } from "../../../../routes/ListData";

const CategoryComponent = () => {
  return (
    <div className="content-layout-filter-product">
      <div
        className="title-filter-product"
        align="center"
        style={{ borderBottom: "1px solid #f2f2f2", height: "30px" }}
      >
        Danh mục sản phẩm
      </div>
      {listType.map((items, index) => {
        return (
          <div className="title-category-product-detail" key={index}>
            <span>{items.name}</span>
            <GrAdd />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryComponent;
