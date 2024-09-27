import { Spin } from "antd";
import React, { Suspense } from "react";

const LoadLazyAdmin = ({ children }) => {
  return <Suspense fallback={<Spin size="small" />}>{children}</Suspense>;
};

export default LoadLazyAdmin;
