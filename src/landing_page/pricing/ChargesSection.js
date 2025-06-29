import React from "react";
import { useState } from "react";

const ChargesSection = () => {
  const [activeTab, setActiveTab] = useState("equities");
  return (
    <>
      <div className="container" style={{ marginBottom: "2rem" }}>
        {/* nav bar */}
        <nav className="tabs">
          <a
            className={`tab tab-equities ${
              activeTab === "equities" ? "sel" : ""
            }`}
            href="#tab_equities"
            data-id="equities"
            onClick={(e)=> {
                e.preventDefault();
                setActiveTab("equities")
            }}
          >
            Equity
          </a>
          <a
            className={`tab tab-equities ${
              activeTab === "currency" ? "sel" : ""
            }`}
            href="#tab_currency"
            data-id="currency"
            onClick={(e)=> {
                e.preventDefault();
                setActiveTab("currency")
            }}
          >
            Currency
          </a>
          <a
            className={`tab tab-equities ${
              activeTab === "commodity" ? "sel" : ""
            }`}
            href="#tab_commodity"
            data-id="commodity"
            onClick={(e)=> {
                e.preventDefault();
                setActiveTab("commodity")
            }}
          >
            Commodity
          </a>
        </nav>

        {/* equity section */}
        {activeTab === "equities" && (
          <div className="section" id="tab_equities" style={{ display: "block" }}>
            <h3
              className="title"
              style={{
                display: "none",
                fontSize: "1.75rem",
                lineHeight: "1.6",
              }}
            >
              Equity
            </h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="charges-head">Brokerage</td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>Flat Rs. 20 per executed order</td>
                  </tr>

                  <tr>
                    <td className="charges-head">STT/CTT</td>
                    <td>0.1% on buy & sell</td>
                    <td>0.025% on the sell side</td>
                    <td>0.02% on the sell side</td>
                    <td>
                      <ul style={{}}>
                        <li>
                          0.125% of the intrinsic value on options that are
                          bought and exercised
                        </li>
                        <li>0.1% on sell side (on premium)</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="charges-head">
                      Transaction
                      <br />
                      charges
                    </td>
                    <td>
                      NSE: 0.00297% <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297% <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00173% <br />
                      BSE: 0
                    </td>
                    <td>
                      NSE: 0.03503% (on premium)
                      <br />
                      BSE: 0.0325% (on premium)
                    </td>
                  </tr>

                  <tr>
                    <td className="charges-head">GST</td>
                    <td>
                      18% on (brokerage + SEBI <br />
                      charges + transaction <br />
                      charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI <br />
                      charges + transaction <br />
                      charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI <br />
                      charges + transaction <br />
                      charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI charges
                      <br /> + transaction charges)
                    </td>
                  </tr>

                  <tr>
                    <td className="charges-head">SEBI charges</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                  </tr>

                  <tr>
                    <td className="charges-head">Stamp charges</td>
                    <td>
                      0.015% or ₹1500 / crore on
                      <br />
                      buy side
                    </td>
                    <td>
                      0.003% or ₹300 / crore on
                      <br />
                      buy side
                    </td>
                    <td>
                      0.002% or ₹200 / crore on
                      <br />
                      buy side
                    </td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* activeTab === "currency" */}
        {activeTab === "currency" && (
          <div className="section" id="tab_currency">
            <h3
              className="title"
              style={{
                display: "none",
                fontSize: "1.75rem",
                lineHeight: "1.6",
              }}
            >
              Currency
            </h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="charges-head">Brokerage</td>
                    <td>0.03% or ₹20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>
                  <tr>
                    <td className="charges-head">STT/CTT</td>
                    <td>No STT</td>
                    <td>No STT</td>
                  </tr>
                  <tr>
                    <td className="charges-head">Transaction charges</td>
                    <td>
                      NSE: 0.00035%
                      <br />
                      BSE: 0.00045%
                    </td>
                    <td>
                      NSE: 0.0311%
                      <br />
                      BSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-head">GST</td>
                    <td colSpan="2">
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-head">SEBI charges</td>
                    <td >₹10 / crore</td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr>
                    <td className="charges-head">Stamp charges</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* activeTab == commodity */}
        {activeTab === "commodity" && (
            <div className="section" id="tab_commodity">
            <h3
              className="title"
              style={{
                display: "none",
                fontSize: "1.75rem",
                lineHeight: "1.6",
              }}
            >
              Currency
            </h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Commodity futures</th>
                    <th>Commodity options   </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="charges-head">Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                  </tr>
                  <tr>
                    <td className="charges-head">STT/CTT</td>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                  </tr>
                  <tr>
                    <td className="charges-head">Transaction charges</td>
                    <td>
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td>
                      MCX: 0.0418%
                      <br />
                      NSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-head">GST</td>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td className="charges-head">SEBI charges</td>
                    <td ><strong className="text-muted">Agri:</strong> <br/>₹1 / crore <br/><strong className="text-muted">Non Agri:</strong><br/> ₹10 / crore </td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr>
                    <td className="charges-head">Stamp charges</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="row text-center text-muted" style={{marginTop : "3rem", fontSize : "1.4rem"}}>
            <p><a href="#">Calculate your costs upfront</a> using our brokerage calculator</p>
        </div>
      </div>
    </>
  );
};

export default ChargesSection;
