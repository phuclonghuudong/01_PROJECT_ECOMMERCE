import { Table } from "antd";
import React, { useState } from "react";

const onChange = (pagination, filters, sorter, extra) => {
  // console.log("params", pagination, filters, sorter, extra);
};
const TableComponent = ({ columns, data }) => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        style={{ marginTop: "20px" }}
        size="small"
        bordered

        // scroll={{
        //   x: "calc(700px + 50%)",
        //   y: 47 * 5,
        // }}
      />
    </div>
  );
};

export default TableComponent;
