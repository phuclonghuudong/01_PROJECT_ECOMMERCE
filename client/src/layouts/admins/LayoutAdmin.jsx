import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      LayoutAdmin <Outlet />
    </div>
  );
};

export default LayoutAdmin;
