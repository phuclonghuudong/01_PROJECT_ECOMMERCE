import React from "react";
import LoadLazy from "./../layouts/admins/LoadLazy";

//Layouts
const LayoutAdmin = React.lazy(() => import("../layouts/admins/LayoutAdmin"));
// Pages
const Dashborad = React.lazy(() => import("../pages/admins/Dashborad"));
const Customer = React.lazy(() => import("../pages/admins/Customer"));
const Product = React.lazy(() => import("../pages/admins/Product"));

const PrivateRoutes = [
  {
    path: "/admin",
    element: <LoadLazy children={<LayoutAdmin />} />,
    children: [
      { index: true, element: <LoadLazy children={<Dashborad />} /> },
      { path: "customer", element: <LoadLazy children={<Customer />} /> },
      { path: "product", element: <LoadLazy children={<Product />} /> },
    ],
  },
];

export default PrivateRoutes;
// /admin/custumer
// /admin/product => Nested Routes
