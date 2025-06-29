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
    <>
      <nav className="navbar navbar-expand-lg border-bottom p-3 sticky-top" style={{backgroundColor : "white"}}>
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src="media/images/logo.svg" style={{width : "25%"}} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
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
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link ${activeNav === "open-account" ? "active-nav" : ""}`} href="/open-account" target="_blank">
                    Signup
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/products"}>
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={"/support"}>
                    Support
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <i class="fa fa-bars" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
