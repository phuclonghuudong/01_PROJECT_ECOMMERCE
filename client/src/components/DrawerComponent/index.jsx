import { Button, Drawer, Space } from "antd";
import React from "react";


const DrawerComponent = ({ title, close, open, children, ...rests }) => {
  return (
    <Drawer
      title={title}
      width={"90vw"}
      onClose={close}
      open={open}
      {...rests}
      // extra={
      //   <Space>
      //     <Button onClick={close}>Cancel</Button>
      //     <Button onClick={submit} type="primary" htmlType="submit">
      //       Submit
      //     </Button>
      //   </Space>
      // }
    >
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
