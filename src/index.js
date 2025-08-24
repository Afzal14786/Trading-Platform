import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import OpenAccount from "./landing_page/signup/OpenAccount";
import SignUp from "./landing_page/signup/SignUp";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";

import VerifyMobile from "./landing_page/signup/VerifyMobile";

import Home from "./landing_page/home/HomePage";

export default Layout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/verify-mobile" element={<VerifyMobile />} />
      </Routes>
    </Layout>
  </Router>
);
