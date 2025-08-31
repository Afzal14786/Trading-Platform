import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const dashboard_url = "http://localhost:5173/login";

const AccountActive = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { userData: passedUserData } = location.state || {};

    if (!passedUserData) {
      toast.error("Access denied. Please create an account first.");
      navigate("/signup");
    } else {
      setUserData(passedUserData);
      setIsLoading(false);
    }
  }, [location.state, navigate]);

  const handleLoginClick = () => {
    window.open(dashboard_url, "_blank");
  };

  if (isLoading) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <p>Loading account details...</p>
      </div>
    );
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-sm text-center p-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h3 className="fw-semibold mb-3">Your account is active 🎉</h3>
        <p className="text-muted">
          To get started, log in using your User ID and pass****. You can refer to
          your registered email for more details.
        </p>
        <p className="mb-4">Welcome aboard, and happy investing!</p>

        <div className="mb-4">
          {userData?.profile && (
            <img
              src="/media/images/user.png"
              alt="Account Active"
              className="img-fluid"
              style={{ maxHeight: "120px" }}
            />
          )}
        </div>
        <div className="container">
          <h5 style={{ fontFamily: "Poppins, sans-serif" }}>
            {userData?.name}
          </h5>
          <p style={{ fontFamily: "Poppins, sans-serif" }}>
            {userData?.userId}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn btn-primary px-4 py-2 fw-semibold"
              onClick={handleLoginClick}
            >
              Login to Dashboard
            </button>
        </div>
      </div>
    </div>
  );
};

export default AccountActive;