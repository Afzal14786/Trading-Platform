import React from "react";

const DifferentAccountType = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="fs-2 mb-3">Explore different account types</h1>
        </div>

        <div className="row justify-content-between mt-5">
          <div className="col account-card rounded mx-3">
            <a href="#" className="anchor-card">
              <div className="d-flex align-items-center ms-3 account-icon">
                <img
                  src="media/images/acop-individual.svg"
                  alt="user icon"
                  className="account-icon"
                />
                <h3 className="mt-4">Individual account</h3>
              </div>
              
              <p className="text-muted">
                Invest in equity, mutual funds and derivatives
              </p>
            </a>
          </div>

          <div className="col account-card rounded mx-3">
            <a href="#" className="anchor-card">
              <div className="d-flex align-items-center ms-3 account-icon">
                <img
                  src="media/images/acop-huf.svg"
                  alt="user icon"
                  className="account-icon"
                />
                <h3 className="mt-4">HUF Account</h3>
              </div>
              
              <p className="text-muted">
                Max tax-efficient investments for your family
              </p>
            </a>
          </div>

          <div className="col account-card rounded mx-3">
            <a href="#" className="anchor-card">
              <div className="d-flex align-items-center ms-3 account-icon">
                <img
                  src="media/images/acop-nri.svg"
                  alt="user icon"
                  className="account-icon"
                />
                <h3 className="mt-4">NRI Account</h3>
              </div>
              
              <p className="text-muted">
                Invest in equity, mutual funds, debentures, and more
              </p>
            </a>
          </div>
        </div>

        <div className="row justify-content-between mt-5 mb-5">
          <div className="col account-card rounded mx-3">
            <a href="#" className="anchor-card">
              <div className="d-flex align-items-center ms-3 account-icon">
                <img
                  src="media/images/acop-minor.svg"
                  alt="user icon"
                  className="account-icon"
                />
                <h3 className="mt-4">Minor Account</h3>
              </div>
              
              <p className="text-muted">
                Teach your little ones about money & investment for their future with them
              </p>
            </a>
          </div>

          <div className="col account-card rounded mx-3">
            <a href="#" className="anchor-card">
              <div className="d-flex align-items-center ms-3 account-icon">
                <img
                  src="media/images/acop-corporate.svg"
                  alt="user icon"
                  className="account-icon"
                />
                <h3 className="mt-4">Corporate / LLP / Partnership</h3>
              </div>
              
              <p className="text-muted">
                Manage your business surplus and investments easily
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DifferentAccountType;
