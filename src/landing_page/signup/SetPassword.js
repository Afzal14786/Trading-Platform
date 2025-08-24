import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import BottomBar from "./BottomBar";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isMatch =
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  const navigate = useNavigate();
  const handleConfirm = () => {
    if (isMatch) {
      console.log("Password set successfully:", password);
      // for testing purpose suppose the user match the password now navigate user to the active-
      navigate("/account-active");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "80vh" }}>
        {/* Left image */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/cyber-security.png"
            alt="Open-Account"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        {/* Right form */}
        <div className="col-md-6">
          <h2 className="fw-semibold mb-4">Set your password</h2>

          {/* Password input */}
          <div className="mb-3" style={{ maxWidth: "350px" }}>
            <label className="form-label">Enter Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ height: "45px" }}
              />
              <span
                className="input-group-text"
                role="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Confirm Password input */}
          <div className="mb-3" style={{ maxWidth: "350px" }}>
            <label className="form-label">Re-enter Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ height: "45px" }}
              />
              <span
                className="input-group-text"
                role="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar
        enabled={isMatch}
        onContinue={handleConfirm}
        buttonText="Confirm"
      />
    </div>
  );
};

export default SetPassword;
