import React from "react";
import LoadLazy from "./../layouts/users/LoadLazy";

// Layouts
const LayoutUser = React.lazy(() => import("../layouts/users/LayoutUser"));

// Pages
const HomePage = React.lazy(() => import("../pages/users/HomePage"));
const ProductPage = React.lazy(() => import("../pages/users/ProductPage"));
const ContactPage = React.lazy(() => import("../pages/users/ContactPage"));
const IntrodutionPage = React.lazy(() => import("../pages/users/IntrodutionPage"));
const LoginUser = React.lazy(() => import("../pages/users/LoginUser"));
const RegisterUser = React.lazy(() => import("../pages/users/RegisterUser"));
const AccountPage = React.lazy(() => import("../pages/users/AccountPage"));
const CheckOrderPage = React.lazy(() => import("../pages/users/CheckOrderPage"));
const CheckWarrantyPage = React.lazy(() => import("../pages/users/CheckWarrantyPage"));
const CartPage = React.lazy(() => import("../pages/users/CartPage"));
const ProductDetail = React.lazy(() => import("../pages/users/ProductDetail"));
const NotFound = React.lazy(() => import("../pages/users/NotFound"));

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
        path: "/san-pham/chi-tiet-san-pham",
        element: <LoadLazy children={<ProductDetail />} />,
      },
      {
        path: "/lien-he",
        element: <LoadLazy children={<ContactPage />} />,
      },
      {
        path: "/gioi-thieu",
        element: <LoadLazy children={<IntrodutionPage />} />,
      },
      {
        path: "/thanh-vien",
        element: <LoadLazy children={<AccountPage />} />,
      },
      {
        path: "/dang-nhap",
        element: <LoadLazy children={<LoginUser />} />,
      },
      {
        path: "/dang-ky",
        element: <LoadLazy children={<RegisterUser />} />,
      },
      {
        path: "/kiem-tra-don-hang",
        element: <LoadLazy children={<CheckOrderPage />} />,
      },
      {
        path: "/kiem-tra-bao-hanh",
        element: <LoadLazy children={<CheckWarrantyPage />} />,
      },
      {
        path: "/gio-hang",
        element: <LoadLazy children={<CartPage />} />,
      },
    ],
  },
  {
    path: "*",
    element: <LoadLazy children={<NotFound />} />,
  },
];

export default PublicRoutes;
