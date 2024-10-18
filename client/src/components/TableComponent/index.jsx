import { Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import { Excel } from "antd-table-saveas-excel";
import ButtonAction from "../ButtonAction";

const onChange = (pagination, filters, sorter, extra) => {
  // console.log("params", pagination, filters, sorter, extra);
};
const TableComponent = (props) => {
  const { columns = [], data = [], loading } = props;

  const newColumnExport = useMemo(() => {
    const filter = columns?.filter((col) => col.dataIndex !== "action");
    return filter;
  }, [columns]);

  const handleExport = () => {
    const excel = new Excel();
    console.log(newColumnExport);
    console.log(data);
    console.log(excel);

    excel
      .addSheet("test")
      .addColumns(newColumnExport)
      .addDataSource(data, {
        str2Percent: true,
      })
      .saveAs("Excel.xlsx");
  };
  const handleImport = () => {};

  return (
    // <Spin spinning={loading}>
    <div>
      <div>
        <ButtonAction nameButton={"Export"} colorButton={"green"} onClick={handleExport} />
        <ButtonAction nameButton={"Import"} colorButton={"orange"} onClick={handleImport} />
      </div>
      <Table
        {...props}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        style={{ marginTop: "20px" }}
        size="small"
        bordered
        pagination={false}
        // scroll={{
        //   x: "calc(700px + 50%)",
        //   y: 47 * 5,
        // }}
      />
    </div>
    // </Spin>
  );
};

export default TableComponent;
