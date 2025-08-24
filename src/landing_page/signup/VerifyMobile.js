import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import OtpBottomBar from "./OtpBottomBar";

const VerifyMobile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const mobile = state?.mobile || "";
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    if (onlyDigits.length <= 6) setOtp(onlyDigits);
  };

  const handleContinue = () => {
    if (otp.length === 6) {
      console.log("Verify OTP:", otp);
    }
  };

  const isEnabled = otp.length === 6;

  return (
    <>
      <div className="container" style={{ paddingBottom: 96}}>
        <div className="row align-items-center" style={{ minHeight: "60vh" }}>
          
          <div className="col-md-6 d-none d-md-block">
            <img src="media/images/verify-mobile.svg" alt="Illustration" className="img-fluid" />
          </div>

          
          <div className="col-md-6">
            <h2 className="mb-2">Mobile OTP</h2>
            <p className="text-muted">
              Sent to <strong>+91 {mobile}</strong> <a href="#" className="ms-1">(change)</a>
            </p>

            
            <div className="mt-3" style={{ maxWidth: 380 }}>
              <div className="input-group">
                <span className="input-group-text">
                  <img src="media/images/mobile-icon.svg" alt="Illustration" className="img-fluid" />
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="form-control text-center"
                  placeholder="••••••"
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>
            </div>

            <p className="text-muted mt-3" style={{ fontSize: 14 }}>
              Didn’t receive OTP? Resend via <a href="#">SMS</a> / <a href="#">Whatsapp</a>
            </p>
          </div>
        </div>
      </div>

      <OtpBottomBar enabled={isEnabled} onContinue={handleContinue} />
    </>
  );
};

export default VerifyMobile;
