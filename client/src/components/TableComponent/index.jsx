import { Spin, Table } from "antd";
import React, { useMemo, useState } from "react";
import { Excel } from "antd-table-saveas-excel";
import ButtonAction from "../ButtonAction";

const TableComponent = (props) => {
  const { columns = [], data = [], loading, total, pageCurrent, totalPage } = props;
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: pageCurrent ? pageCurrent : 1,
      pageSize: total, //tổng số lượng sản phẩm
    },
  });

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
    setTableParams({
      pagination,
      filters,
      // sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      // sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });
  };

  const newColumnExport = useMemo(() => {
    const filter = columns?.filter((col) => col.dataIndex !== "action");
    return filter;
  }, [columns]);
  const handleExport = () => {
    const excel = new Excel();

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
        pagination={tableParams.pagination}
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
