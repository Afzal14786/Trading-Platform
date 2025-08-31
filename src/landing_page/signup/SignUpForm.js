import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {toast} from "react-toastify"

const SignUpForm = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetOtp = () => {

    if (mobile && mobile.length >= 10) {
      navigate("/verify-mobile", { state: { mobile: `+${mobile}` } });
    } else {
      toast.error("Please enter a valid mobile number");
    }
  };

  const isSignUpPage = location.pathname === "/signup";

  return (
    <div className="container">
      {isSignUpPage ? (
        <div className="row p-3" style={{ marginBottom: "7rem" }}>
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

            <div className="mb-3 mt-3">
              <PhoneInput
                country={"in"}
                value={mobile}
                onChange={setMobile}
                inputClass="form-control"
                inputStyle={{ width: "60%" }}
                placeholder="Enter your mobile number"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary py-3 mt-3 form-btn fw-semibold"
              onClick={handleGetOtp}
            >
              Get OTP
            </button>

            <p className="text-muted mt-4" style={{ fontSize: "15px" }}>
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="terms-link">Terms</a> &{" "}
              <a href="#" className="terms-link">privacy policy</a>
            </p>
          </div>
        </div>
      ) : (
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

            <div className="mb-3 mt-3">
              <PhoneInput
                country={"in"}
                value={mobile}
                onChange={setMobile}
                inputClass="form-control"
                inputStyle={{ width: "60%" }}
                placeholder="Enter your mobile number"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary py-3 mt-3 form-btn fw-semibold"
              onClick={handleGetOtp}
            >
              Get OTP
            </button>

            <p className="text-muted mt-4" style={{ fontSize: "15px" }}>
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="terms-link">Terms</a> &{" "}
              <a href="#" className="terms-link">privacy policy</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
