import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";
import {toast} from "react-toastify";
import axios from "axios";

const backend_url = "http://localhost:5174/api/v1/user/register/lead-info";

const LeadInfo = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { phone } = location.state || {};

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value) || value === "");
  };

  const handleOtpChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    if (onlyDigits.length <= 6) setOtp(onlyDigits);
  };

  const sendOtp = async () => {
    setIsLoading(true);
    try {
      // performing the setp 1
      await axios.post(backend_url, {
        step: "sendOtp",
        phone,
        name,
        email,
      });

      setStep(2);
      toast.success(`OTP sent to your email: ${email}`);
    } catch (error) {
      toast.error(error.response?.data?.message || `Failed to send OTP . Please try again`);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(backend_url, {
        step: "verifyOtp",
        email,
        otp,
      });

      if (response.data.success) {
        toast.success(`OTP verified successfully`);
        navigate("/set-password", {state: {phone}});
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to verify OTP. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    if (step === 1) {
      if (!emailValid) {
        toast.error("Please enter a valid email address");
        return;
      }
      sendOtp();
    } else if (step === 2) {
      if (otp.length === 6) {
        verifyOtp();
      } else {
        toast.error("Please Enter A Valid OTP");
      }
    }
  };

  const isEnabled =
    step === 1
      ? name.trim() !== "" && email.trim() !== "" && emailValid
      : otp.length === 6;

  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "80vh" }}>
        {/* Left image section */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/personal-information.png"
            alt="Open-Account"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Right section */}
        <div className="col-md-6">
          {step === 1 && (
            <>
              <h2 className="fw-semibold mb-4">What's your e-mail?</h2>

              <button
                className="btn btn-light border d-flex align-items-center justify-content-center mb-3"
                style={{ height: "35px", maxWidth: "350px", width: "100%" }}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google"
                  className="me-2"
                />
                Continue with Google
              </button>

              <div
                className="d-flex align-items-center mb-3"
                style={{ maxWidth: "350px" }}
              >
                <hr className="flex-grow-1" />
                <span className="px-2 text-muted">or</span>
                <hr className="flex-grow-1" />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ height: "35px", maxWidth: "350px" }}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${!emailValid ? "is-invalid" : ""}`}
                  placeholder="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ height: "35px", maxWidth: "350px" }}
                />
                {!emailValid && (
                  <div className="invalid-feedback">
                    Enter a valid email address
                  </div>
                )}
              </div>

              <small className="text-muted">
                You will receive an OTP on this email address
              </small>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="fw-semibold mb-4">Enter the OTP</h2>
              <p className="text-muted">
                Sent to <strong>{email}</strong>{" "}
                <a href="#" className="ms-1">
                  (change)
                </a>
              </p>

              <div className="mt-3" style={{ maxWidth: "350px" }}>
                <div className="input-group">
                  <span
                    className="input-group-text d-flex align-items-center justify-content-center"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <img
                      src="media/images/password.png"
                      alt="Illustration"
                      style={{
                        height: "32px",
                        width: "32px",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="form-control text-center"
                    placeholder="• • • • • •"
                    value={otp}
                    onChange={handleOtpChange}
                    style={{ height: "50px" }}
                  />
                </div>
              </div>

              <p className="text-muted mt-3" style={{ fontSize: 14 }}>
                Didn’t receive OTP?{" "}
                <a href="#" onClick={sendOtp}>
                  Resend
                </a>
              </p>
            </>
          )}
        </div>
      </div>

      <BottomBar
        enabled={isEnabled}
        onContinue={handleContinue}
        buttonText={isLoading ? "Loading..." : "Continue"}
      />
    </div>
  );
};

export default LeadInfo;
