import { Button, Form } from "antd";
import React from "react";

const LabelButton = ({ title, cancel }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Form.Item>
        <Button type="primary" className="admin-btn-addNew" htmlType="submit">
          {title}
        </Button>

        <Button style={{ marginLeft: "10px" }} type="" onClick={cancel}>
          Cancel
        </Button>
      </Form.Item>
    </div>
  );
};

export default LabelButton;
