import { useLocation } from "react-router-dom";

const SignUpForm = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      <div className="container">
        {isSignUpPage ? (
          <>
            <div className="row p-3" style={{marginBottom : "7rem"}}>
              <div className="col">
                <img
                  src="media/images/account_open.svg"
                  alt="Open-Account Image"
                />
              </div>

              <div className="col p-2 form-col">
                <h2 className="fw-semibold text-muted mt-5">SignUp Now</h2>
                <span className="fw-lighter">
                  Or track your existing application
                </span>
                <div className="input-group mb-3 mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      <img
                        src="media/images/india-flag.svg"
                        alt="indian-flag"
                      />
                      <span className="m-2 text-muted"> +91</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary py-3 mt-3 form-btn fw-semibold"
                >
                  Get OTP
                </button>
                <p className="text-muted mt-4" style={{ fontSize: "15px" }}>
                  By proceeding, you agree to the Zerodha{" "}
                  <a href="#" className="terms-link">
                    Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="terms-link">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row p-3">
              <div className="col">
                <img
                  src="media/images/account_open.svg"
                  alt="Open-Account Image"
                />
              </div>

              <div className="col p-2 form-col">
                <h2 className="fw-semibold text-muted mt-5">SignUp Now</h2>
                <span className="fw-lighter">
                  Or track your existing application
                </span>
                <div className="input-group mb-3 mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      <img
                        src="media/images/india-flag.svg"
                        alt="indian-flag"
                      />
                      <span className="m-2 text-muted"> +91</span>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary py-3 mt-3 form-btn fw-semibold"
                >
                  Get OTP
                </button>
                <p className="text-muted mt-4" style={{ fontSize: "15px" }}>
                  By proceeding, you agree to the Zerodha{" "}
                  <a href="#" className="terms-link">
                    Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="terms-link">
                    privacy policy
                  </a>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
