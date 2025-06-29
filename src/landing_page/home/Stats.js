import React from "react";

const Stats = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1 className="mb-5">Trust with confidence</h1>
            <div className="col pt-2">
              <h5 className="fs-7">Customer-first always</h5>
              <p className="text-muted text-small">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>

            <div className="col pt-4">
              <h5 className="fs-7">No spam or gimmicks</h5>
              <p className="text-muted text-small">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="hover-text-black"
                >
                  {" "}
                  Our philosophies.
                </a>
              </p>
            </div>

            <div className="col pt-4">
              <h5 className="fs-7">The Zerodha universe</h5>
              <p className="text-muted fs-7">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div className="col pt-4">
              <h5 className="fs-7">Do better with money</h5>
              <p className="text-muted fs-7">
                With initiatives like{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="hover-text-black"
                >
                  Nudge{" "}
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="hover-text-black"
                >
                  Kill Switch,{" "}
                </a>
                we don't just facilitate transactions, but actively help you do
                better with your money.
              </p>
            </div>
          </div>

          <div
            className="col-7 ml-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="row">
              <img
                src="media/images/ecosystem.png"
                alt="eco-system"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="mt-2 text-center">
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    marginRight: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Explore our products{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  style={{ textDecoration: "none", fontWeight: "500" }}
                >
                  Try Kito demo{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div >
            <a href="#" className="col-12 mt-5 d-flex justify-content-center image-fade-hover">
              <img
                src="media/images/pressLogos.png"
                alt="eco-system"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
