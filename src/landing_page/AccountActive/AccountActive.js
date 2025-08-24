import { useNavigate } from "react-router-dom";

const AccountActive = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // navigate to the dashboard and user need to login there
    navigate("/login"); 
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm text-center p-5" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="fw-semibold mb-3">
          Your account is active 🎉
        </h3>
        <p className="text-muted">
          To get started, log in using your User ID and password.  
          You can refer to your registered email for more details.
        </p>
        <p className="mb-4">Welcome aboard, and happy investing!</p>

        <div className="mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Account Active"
            className="img-fluid"
            style={{ maxHeight: "120px" }}
          />
        </div>

        <button
          className="btn btn-primary px-4 py-2 fw-semibold"
          onClick={handleLoginClick}
        >
          Login to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AccountActive;
