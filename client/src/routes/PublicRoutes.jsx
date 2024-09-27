import React from "react";
import LoadLazy from "./../layouts/users/LoadLazy";

// Layouts
const LayoutUser = React.lazy(() => import("../layouts/users/LayoutUser"));

// Pages
const HomePage = React.lazy(() => import("../pages/users/HomePage"));
const ProductPage = React.lazy(() => import("../pages/users/ProductPage"));
const ContactPage = React.lazy(() => import("../pages/users/ContactPage"));

const PublicRoutes = [
  {
    path: "",
    element: <LoadLazy children={<LayoutUser />} />,
    children: [
      {
        path: "/",
        element: <LoadLazy children={<HomePage />} />,
      },
      {
        path: "/san-pham",
        element: <LoadLazy children={<ProductPage />} />,
      },
      {
        path: "/lien-he",
        element: <LoadLazy children={<ContactPage />} />,
      },
    ],
  },
];

export default PublicRoutes;
