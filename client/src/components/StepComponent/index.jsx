import { Steps } from "antd";
import React from "react";

const StepComponent = ({ current = 0, items = [] }) => {
  const { Step } = Steps;
  return (
    <Steps current={current} style={{ padding: "10px" }}>
      {items?.map((item, index) => {
        return <Step key={index} title={item?.title} description={item?.description} />;
      })}
    </Steps>
  );
};

export default StepComponent;
