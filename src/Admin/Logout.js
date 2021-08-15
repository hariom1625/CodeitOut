import React from "react";
import { Link } from "react-router-dom";
class Logout extends React.Component {
  render() {
    return (
      <div>
        You have been Logged Out!
        <Link to="/adminLogin">
          {" "}
          <button
            className="btn login-page-btn btn-lg btn-primary btn-block"
            type="submit"
            name="signin"
          >
            Admin Login
          </button>
        </Link>
      </div>
    );
  }
}

export default Logout;
