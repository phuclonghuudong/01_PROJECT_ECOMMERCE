import { Form, Select } from "antd";
import React from "react";

const SelectComponent = ({ data, name, label, required }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: !required ? true : false,
        },
      ]}
    >
      <Select
        style={{
          width: 200,
        }}
      >
        {data?.map((items, index) => {
          return (
            <Select.Option value={items?.id} key={index}>
              {items?.name}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
    // showSearch
    // optionFilterProp="label"
    // filterSort={(optionA, optionB) =>
    //   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
  );
};

export default SelectComponent;
