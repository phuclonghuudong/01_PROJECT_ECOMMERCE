import { Table } from "antd";
import React, { useState } from "react";

const onChange = (pagination, filters, sorter, extra) => {
  // console.log("params", pagination, filters, sorter, extra);
};
const TableComponent = (props) => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  const { columns = [], data = [] } = props;

  return (
    <div>
      <Table
        {...props}
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
