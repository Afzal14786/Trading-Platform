import { Link } from "react-router-dom";

const SignupNavbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center border-bottom px-4 py-2 mx-5 my-2"
      style={{ backgroundColor: "#fff" }}
    >
      <Link to="/">
        <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
      </Link>

      <div>
        <i className="fa fa-user-circle text-primary fs-4"></i>
      </div>
    </nav>
  );
};

export default SignupNavbar;
