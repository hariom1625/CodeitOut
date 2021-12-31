import React, { Component } from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom';

// function refreshPage ()  {
// setTimeout( () => {
// window.location.reload(false)
// },50);
// }
class LoginNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = { active: "Home" };
    this.changed = this.changed.bind(this);
  }

  changed() {
    const ext = document.URL;
    if (ext.length > 22) {
      const n = ext.lastIndexOf("/");
      const exten = ext.substring(n + 1);
      if (exten === "questionlist") {
        this.setState({ active: "Questions List" });
      }
      if (exten === "resources") {
        this.setState({ active: "Resources" });
      }
      if (exten === "Drawing Board") {
        this.setState({ active: "Drawing Board" });
      }
      if (exten === "Profile") {
        this.setState({ active: "Profile" });
      }
    } else {
      this.setState({ active: "Home" });
    }
  }
  componentDidMount() {
    const ext = document.URL;
    //const conti = ext.includes("00/");
    if (ext.length > 22) {
      const n = ext.lastIndexOf("/");
      const exten = ext.substring(n + 1);

      if (exten === "questionlist") {
        this.setState({ active: "Questions List" });
      }
      if (exten === "resources") {
        this.setState({ active: "Resources" });
      }
      if (exten === "DrawingBoard") {
        this.setState({ active: "Drawing Board" });
      }
    } else {
      this.setState({ active: "Home" });
    }
  }
  // refreshPage ()  {
  // setTimeout( () => {
  // window.location.reload(false)
  // },50);
  // }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md fixed-right navbar-light bgrnd py-3"
          id="scrollup"
        >
          <a className="navbar-brand" href="/">
            CodeitOut
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center">
              <a href="/" id="navLink">
                <hr className="d-md-none"></hr>
                <li
                  className={
                    this.state.active === "Home"
                      ? "nav-item mx-3 px-3 active"
                      : "nav-item mx-3 px-3"
                  }
                  onClick={() => {
                    this.changed();
                    window.location.href = "/";
                  }}
                >
                  Home
                </li>
              </a>

              <a href="/questionlist" id="navLink">
                <hr className="d-md-none"></hr>{" "}
                <li
                  className={
                    this.state.active === "Questions List"
                      ? "nav-item mx-3 px-3 active"
                      : "nav-item mx-3 px-3"
                  }
                  onClick={() => {
                    this.changed();
                    window.location.href = "/questionlist";
                  }}
                >
                  Questions List
                </li>
              </a>

              <a href="/resources" id="navLink">
                <hr className="d-md-none"></hr>{" "}
                <li
                  className={
                    this.state.active === "Resources"
                      ? "nav-item mx-3 px-3 active"
                      : "nav-item mx-3 px-3"
                  }
                  onClick={() => {
                    this.changed();
                    window.location.href = "/resources";
                  }}
                >
                  Resources
                </li>
              </a>
              <a
                href="/DrawingBoard
                id="navLink"
              >
                <hr className="d-md-none"></hr>{" "}
                <li
                  className={
                    this.state.active === "Drawing Board"
                      ? "nav-item mx-3 px-3 active"
                      : "nav-item mx-3 px-3"
                  }
                  onClick={() => {
                    this.changed();
                    window.location.href = "/DrawingBoard";
                  }}
                >
                  Drawing Board
                </li>
              </a>
            </ul>
            <div className="btn-grp">
              <a href="/SignIn">
                <button
                  className="btn signin-nav btn-lg btn-dark btn-block"
                  type="submit"
                  name="SignIn"
                >
                  {" "}
                  Sign In{" "}
                </button>
              </a>
              <a href="/SignUp">
                <button
                  className="btn signin-nav btn-lg btn-dark btn-block"
                  type="submit"
                  name="SignUp"
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default LoginNavbar;
