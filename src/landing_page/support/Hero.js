import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#387ED1"}}
      >
        <div className="container" style={{marginBottom : "3rem", marginTop : "3rem"}}>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center px-4">
              <div>
                <a
                  href="/"
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: "1.4rem",
                  }}
                >
                  Support Portal
                </a>
              </div>
              <div>
                <a
                  href="/"
                  style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Track tickets
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
                <h5 className="support-subheading">
                Search for an answer or browse help topics to create a ticket
                </h5>

            {/* Input + Icon */}
            <div className="input-wrapper mt-3 mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                style={{height : "3.5rem", borderRadius : "2px"}}
              />
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </div>

            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-4" style={{paddingLeft : "10px", fontSize : "1.2rem"}}>
              <a href="/" className="footer-link">Track account opening</a>
              <a href="/" className="footer-link">Track segment activation</a>
              <a href="/" className="footer-link">Intraday margins</a>
              <a href="/" className="footer-link">Kite user manual</a>
            </div>
          </div>

            <div className="col-5" style={{marginTop : "2rem", paddingLeft : "15px"}}>
                <div className="featured-header">    
                    <h5 className="support-subheading">
                        Featured
                    </h5>
                </div>

                <div className="alert-back">
                    <div className="banner-content">
                        <ol>
                            <li>
                                <a href="" className="banner-link">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                            </li>
                            &nbsp;
                            <li>
                                <a href="" className="banner-link">Revision in expiry day of index and Stock derivatives contracts</a>
                            </li>
                            &nbsp;

                        </ol>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
