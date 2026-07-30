import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
const Layout = lazy(() => import("./layout/Layout"));
const Dashboardlayout = lazy(() => import("./layout/Dashboardlayout"));

// Pages
const Home = lazy(() => import("./page/Home/Home"));
const Page = lazy(() => import("./page/Page"));
// const Cartpage = lazy(() => import("./page/Cart/Cartpage"));
const FAQ = lazy(() => import("./page/FAQ/FAQ"));
const PrivacyPolicy = lazy(() => import("./page/Privacy-Policy/PrivacyPolicy"));

const Product = lazy(() => import("./page/allproduct/Product"));
const OrderPlaced = lazy(() => import("./page/order/OrderPlaced"));
const Register = lazy(() => import("./page/register/Register"));
const Contact = lazy(() => import("./page/Contact/Contact"));
const About = lazy(() => import("./page/about/About"));
const Login = lazy(() => import("./page/login/Login"));
const Service = lazy(() => import("./page/Service/Service"));
const Payment = lazy(() => import("./page/checkout/Payment"));
const ViewCart = lazy(() => import("./page/Cart/ViewCart"));

// Components
const Faq = lazy(() => import("./components/Faq"));
const CustHome = lazy(() => import("./components/CustHome"));
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/allproduct", element: <Product /> },
      
      // Protected Routes
      // {
      //   path: "/cart",
      //   element: <Cartpage />,
      // },
      {
        path: "/viewcart",
        element: <ViewCart />,
      },
      {
        path: "/checkout",
        element: <Payment />,
      },
      {
        path: "/place-order",
        element: <OrderPlaced />,
      },

      { path: "*", element: <Page /> },
    ],
  },

  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

  {
    path: "/dash",
    element: <Dashboardlayout />,
    children: [
      { path: "/dash", element: <CustHome /> },
      { path: "/dash/faq", element: <Faq /> },
      { path: "*", element: <Page /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
