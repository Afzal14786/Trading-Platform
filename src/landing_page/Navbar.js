import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    // Match the pathname with nav item
    if (location.pathname.includes("open-account")) setActiveNav("open-account");
    else if (location.pathname.includes("about")) setActiveNav("about");
    else if (location.pathname.includes("products")) setActiveNav("products");
    else if (location.pathname.includes("pricing")) setActiveNav("pricing");
    else if (location.pathname.includes("support")) setActiveNav("support");
    else setActiveNav(""); // default
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom p-3 sticky-top d-flex justify-content-between align-items-center">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to={"/"}>
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>

        {/* Hamburger menu aligned to the right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeNav === "open-account" ? "active" : ""}`}
                to="/open-account"
                target="_blank"
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeNav === "products" ? "active" : ""}`}
                to="/products"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeNav === "pricing" ? "active" : ""}`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${activeNav === "support" ? "active" : ""}`}
                to="/support"
              >
                Support
              </Link>
            </li>

            {/* Optional: Add a mobile menu or icon */}
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fa fa-bars" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
