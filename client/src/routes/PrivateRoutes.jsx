import React from "react";
import LoadLazy from "./../layouts/admins/LoadLazy";

//Layouts
const LayoutAdmin = React.lazy(() => import("../layouts/admins/LayoutAdmin"));
// Pages
const Dashborad = React.lazy(() => import("../pages/admins/Dashborad"));
const Customer = React.lazy(() => import("../pages/admins/Customer"));
const Category = React.lazy(() => import("../pages/admins/Category"));
const Product = React.lazy(() => import("../pages/admins/Product"));
const News = React.lazy(() => import("../pages/admins/News"));
const Order = React.lazy(() => import("../pages/admins/Order"));
const Shipping = React.lazy(() => import("../pages/admins/Shipping"));
const Sales = React.lazy(() => import("../pages/admins/Sales"));

const PrivateRoutes = [
  {
    path: "/admin/",
    element: <LoadLazy children={<LayoutAdmin />} />,
    children: [
      { path: "", element: <LoadLazy children={<Dashborad />} /> }, //index: true,
      { path: "customer", element: <LoadLazy children={<Customer />} /> },
      { path: "product", element: <LoadLazy children={<Product />} /> },
      { path: "category", element: <LoadLazy children={<Category />} /> },
      { path: "news", element: <LoadLazy children={<News />} /> },
      { path: "order", element: <LoadLazy children={<Order />} /> },
      { path: "shipping", element: <LoadLazy children={<Shipping />} /> },
      { path: "sales", element: <LoadLazy children={<Sales />} /> },
    ],
  },
];

export default PrivateRoutes;
// /admin/custumer
// /admin/product => Nested Routes
