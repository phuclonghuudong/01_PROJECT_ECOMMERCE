import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div>
      <Header />
      LayoutUser
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutUser;
