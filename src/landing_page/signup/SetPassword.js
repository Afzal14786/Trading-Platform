import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import BottomBar from "./BottomBar";
import axios from "axios";
import {toast}  from "react-toastify";


const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {phone} = location.state || {};

  useEffect(()=> {
    if (!phone) {
      toast.error("Phone number not found, please try again");
      navigate("/signup");
    }
  }, [phone, navigate]);

  const validatePassword = (pwd) => {
    const newCriteria = {
      length: pwd.length >= 8,
      lowercase: /[a-z]/.test(pwd),
      uppercase: /[A-Z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
    };
    setPasswordCriteria(newCriteria);
  };

  const handlePasswordChange = (e)=> {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  }

  const isPasswordValid = Object.values(passwordCriteria).every(Boolean);
  const isMatch = password === confirmPassword && password.length > 0;
  const isEnabled = isPasswordValid && isMatch && !isLoading;

  const handleConfirm = async () => {
    if (!isEnabled) return;
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/user/register/set-password`, {
        phone,
        password,
      });

      if (response.data.success) {
        toast.success(`Account created successfully!`)
        navigate('/account-active', {
          state: {
            tokens: response.data.data.tokens,
            userData: response.data.data.user,
          }
        });
      }
    } catch(err) {
      toast.error(err.response?.data?.message)
    } finally {
      setIsLoading(false);
    }
  };

  const renderCriteria = (text, isValid) => (
    <div className={`d-flex align-items-center mb-1 ${isValid ? 'text-success' : 'text-muted'}`}>
      <span style={{ fontSize: '1.2rem', marginRight: '5px' }}>
        {isValid ? '✅' : '⚫'}
      </span>
      <small>{text}</small>
    </div>
  );


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
                onChange={(e) => handlePasswordChange(e)}
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
          
          {/* Password criteria feedback */}
          <div className="mb-3" style={{ maxWidth: "350px" }}>
            {renderCriteria("Minimum 8 characters", passwordCriteria.length)}
            {renderCriteria("At least one lowercase letter", passwordCriteria.lowercase)}
            {renderCriteria("At least one uppercase letter", passwordCriteria.uppercase)}
            {renderCriteria("At least one number", passwordCriteria.number)}
            {renderCriteria("At least one special character", passwordCriteria.specialChar)}
            {password.length > 0 && (
              <div className={`mt-2 ${isMatch ? 'text-success' : 'text-danger'}`}>
                {isMatch ? '✅ Passwords match' : '❌ Passwords do not match'}
              </div>
            )}
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
        buttonText={isLoading ? "Creating Account..." : "Confirm"}
      />
    </div>
  );
};

export default SetPassword;