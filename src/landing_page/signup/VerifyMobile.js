import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import BottomBar from "./BottomBar";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import axios from "axios";

const VerifyMobile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  let mobile = state?.mobile || "";
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  if (mobile && !mobile.startsWith("+")) {
    mobile = `+91${mobile}`;
  }
  const recaptchaContainerRef = useRef(null);

  const sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;
    if (!appVerifier) {
      toast.error("Recaptcha is not ready. Please try again in a moment.");
      return;
    }

    signInWithPhoneNumber(auth, mobile, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        toast.success(`An OTP sent to your mobile number.`);
      })
      .catch((err) => {
        console.error(`Error while sending OTP: ${err}`);
        toast.error(
          "Error sending OTP. Please check the number and try again."
        );
      });
  };

  useEffect(() => {
    if (!mobile) {
      navigate("/signup");
      toast.error("Please enter a valid number");
      return;
    }

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            setIsRecaptchaReady(true);
          },
          "expired-callback": () => {
            toast.error("reCAPTCHA expired. Please reload the page.");
          },
        }
      );

      window.recaptchaVerifier.verify();
    }

    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, [mobile, navigate]);

  useEffect(() => {
    if (isRecaptchaReady) {
      sendOtp();
    }
  }, [isRecaptchaReady]);

  const handleOtpChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    if (onlyDigits.length <= 6) setOtp(onlyDigits);
  };

  const handleContinue = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    if (!confirmationResult) {
      toast.error("Something went wrong, please try again later");
      return;
    }

    setLoading(true);

    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      const idToken = await user.getIdToken();

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/register/verify-mobile`,
        {
          idToken,
        }
      );

      if (response.data.success) {
        if (response.data.userExists) {
          toast.success(`Account already exist with this number.`);
          navigate("/account-active", {
            state: {
              userData: response.data.data.user,
              tokens: response.data.data.tokens,
            }
          });
        } else {
          toast.success("Phone verified successfully!");
          navigate("/lead-info", { state: { phone: user.phoneNumber } });
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error(`Error during OTP verification: ${err}`);
      toast.error("Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container" style={{ paddingBottom: 96 }}>
        <div className="row align-items-center" style={{ minHeight: "60vh" }}>
          <div className="col-md-6 d-none d-md-block">
            <img
              src="media/images/verify-mobile.svg"
              alt="Illustration"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">
            <h2 className="mb-2">Mobile OTP</h2>
            <p className="text-muted">
              Sent to <strong>{mobile}</strong>{" "}
              <a href="/signup" className="ms-1">
                (change)
              </a>
            </p>

            <div className="mt-3" style={{ maxWidth: 380 }}>
              <div className="input-group">
                <span className="input-group-text">
                  <img
                    src="media/images/mobile-icon.svg"
                    alt="Illustration"
                    className="img-fluid"
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
                  style={{ height: "50px", maxWidth: "350px" }}
                />
              </div>
            </div>

            <p className="text-muted mt-3" style={{ fontSize: 14 }}>
              Didn’t receive OTP?
              <br />
              {loading ? (
                <span>Verifying OTP...</span>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    sendOtp();
                  }}
                >
                  Resend via SMS
                </a>
              )}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={recaptchaContainerRef}
        id="recaptcha-container"
        style={{ display: "none" }}
      ></div>

      <BottomBar
        enabled={otp.length === 6}
        onContinue={handleContinue}
        buttonText={loading ? "Loading..." : "Continue"}
      />
    </>
  );
};

export default VerifyMobile;
