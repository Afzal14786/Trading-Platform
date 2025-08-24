import { useLocation } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import SignupNavbar from "./landing_page/signup/SignupNavbar"; // create this new minimal navbar
import Footer from "./landing_page/Footer";
import ScrollToTop from "./landing_page/ScrollToTop";

const Layout = ({ children }) => {
  const location = useLocation();

  // check if we are in any of the signup-related pages
  const signupRoutes = [
    "/verify-mobile",
    "/lead-info",
    "/set-password",
    "/account-active",
  ];

  const isSignupFlow = signupRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar */}
      {isSignupFlow ? <SignupNavbar /> : <Navbar />}

      {/* ScrollToTop runs on route change */}
      <ScrollToTop />

      {/* Main page content */}
      {children}

      {/* Footer hidden only during signup flow */}
      {!isSignupFlow && <Footer />}
    </>
  );
};

export default Layout;
