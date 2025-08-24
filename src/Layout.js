import { useLocation } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import ScrollToTop from "./landing_page/ScrollToTop";

const Layout = ({ children }) => {
  const location = useLocation();
  const isOtpPage = location.pathname === "/verify-mobile";

  return (
    <>
      {/* Navbar is always on top */}
      <Navbar />

      {/* ScrollToTop runs on route change */}
      <ScrollToTop />

      {/* Main page content */}
      {children}

      {/* Footer hidden only on OTP page */}
      {!isOtpPage && <Footer />}
    </>
  );
};

export default Layout;
