import React from "react";

const InvestmentOptions = () => {
  return (
    <>
      {/* <div classNameName="container mt-5 mb-5">
        <h1 classNameName="text-muted fw-semibold fs-2 text-center">
          Investment options with Zerodha demat account
        </h1>
      </div> */}

      <div className="container my-5 mb-5">
        <h3 className="text-center fw-semibold fs-2 text-secondary">
          Investment options with Zerodha demat account
        </h3>
        <div className="row mt-5 mx-5">
          {/* <!-- Stocks --> */}
          <div className="col-md-6 p-4 d-flex">
            <img
              src="media/images/stocks-acop.svg"
              alt="Stocks"
              className="me-3"
              style={{ width: "30%" }}
            />
            <div className="mt-3">
              <h5 className="fw-semibold">Stocks</h5>
              <p className="mb-0 text-muted">Invest in all exchange-listed <br/>securities</p>
            </div>
          </div>

          {/* <!-- Mutual Funds --> */}
          <div className="col-md-6 p-4 d-flex">
            <img
              src="media/images/mutual.svg"
              alt="Mutual Funds"
              className="me-3"
              style={{ width: "30%" }}
            />
            <div>
              <h5 className="fw-bold">Mutual funds</h5>
              <p className="mb-0 text-muted">
                Invest in commission-free direct <br/>mutual funds
              </p>
            </div>
          </div>
        </div>

        <div className="row mx-5">
          {/* <!-- IPO --> */}
          <div className="col-md-6 p-4 d-flex">
            <img
              src="media/images/ipo-acop.svg"
              alt="IPO"
              className="me-3"
              style={{ width: "30%" }}
            />
            <div>
              <h5 className="fw-bold">IPO</h5>
              <p className="mb-0 text-muted">Apply to the latest IPOs instantly<br/> via UPI</p>
            </div>
          </div>

          {/* <!-- Futures & Options --> */}
          <div className="col-md-6 p-4 d-flex">
            <img
              src="media/images/fo-acop.svg"
              alt="Futures and Options"
              className="me-3"
              style={{ width: "30%" }}
            />
            <div>
              <h5 className="fw-bold">Futures & options</h5>
              <p className="mb-0 text-muted">
                Hedge and mitigate market <br/>risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="text-center">
            <button type="submit" className="fw-semibold btn btn-primary form-btn py-2">Explore Investment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentOptions;
