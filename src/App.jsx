
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import Page from "./page/Page";
import Layout from "./layout/Layout";
import Cartpage from "./page/Cart/Cartpage";
import FAQ from "./page/FAQ/FAQ";
import PrivacyPolicy from "./page/Privacy-Policy/PrivacyPolicy";
import DisclaimerPage from './page/DisclaimerPage/DisclaimerPage';
import TermsAndConditions from "./page/terms&condition/TermsAndConditions";
import LimitationOfLiability from "./page/limitationOfLiability/Liability";
import GeneralInformation from "./page/generalInformation/generalInfo";
import EyeglassesContactPolicy from "./page/eyeglasses-contact-policy/EyeglassesContactPolicy";
import RightsEnforcementPolicy from "./page/rights-enforcement-policy/RightsEnforcementPolicy";
import Dashboardlayout from "./layout/Dashboardlayout";
import Faq from "./components/Faq";
import About from "./components/About";
import CustHome from "./components/CustHome";
import ViewCart from "./page/Cart/ViewCart";
import Product from "./page/allproduct/Product";

import InsuranceClaimForm from "./page/form/InsuranceClaimForm";
import DocumentUploadForm from "./page/form/DocumentUploadForm";
import Checkout from "./page/checkout/Checkout";
import OrderPlaced from "./page/order/OrderPlaced";
import Register from "./page/register/Register";
import Contact from "./page/Contact/Contact";

//  ProtectedRoute
import ProtectedRoute from "./page/protectedRoute/ProtectedRoute";
import Login from "./page/login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact/> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/allproduct", element: <Product /> },
      { path: "/disclaimer", element: <DisclaimerPage /> },
      { path: "/termsandcondition", element: <TermsAndConditions /> },
      { path: "/liability", element: <LimitationOfLiability /> },
      { path: "/general-info", element: <GeneralInformation /> },
      { path: "/eyeglasses-contact-policy", element: <EyeglassesContactPolicy /> },
      { path: "/rights-enforcement-policy", element: <RightsEnforcementPolicy /> },

      // ✅ Protected Routes
      {
        path: "/cart",
        element: (
          // <ProtectedRoute>
          <Cartpage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/viewcart",
        element: (
          // <ProtectedRoute>
          <ViewCart />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          // <ProtectedRoute>
          <Checkout />
          // </ProtectedRoute>
        ),
      },
      {

        path: "/form",
        element: <InsuranceClaimForm/>,
      },
      {
        path: "/form-new",
        element: <DocumentUploadForm/>,
      },

      {
        path: "/place-order",
        element: (
          // <ProtectedRoute>
          <OrderPlaced />
          // </ProtectedRoute>
        ),
      },

      { path: "*", element: <Page /> },
    ],
  },

  // ✅ Protected Dashboard
  {
    path: "/dash",
    element: (
      <ProtectedRoute>
        <Dashboardlayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dash", element: <CustHome /> },
      { path: "/dash/about", element: <About /> },
      { path: "/dash/faq", element: <Faq /> },
      { path: "*", element: <Page /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
