import { Spin } from "antd";
import React, { Suspense } from "react";

const LoadLazy = ({ children }) => {
  return <Suspense fallback={<Spin size="small" />}>{children}</Suspense>;
};

export default LoadLazy;
