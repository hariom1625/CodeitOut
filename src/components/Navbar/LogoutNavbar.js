import React, { Component } from "react";
import "./Navbar.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
// function refreshPage ()  {
// setTimeout( () => {
// window.location.reload(false)
// },500);
// }

class LogoutNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = { active: "Home", isClicked: false };
    this.changed = this.changed.bind(this);
  }

  changed() {
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
      if (exten === "Profile") {
        this.setState({ active: "Profile" });
      }
    } else {
      this.setState({ active: "Home" });
    }
  }
  refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 200);
  }

  signout = () => {
    const refreshToken = localStorage.getItem("userRefreshToken");
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_SERVER}/api/user/logout-refreshToken`,
      data: {
        refreshToken: refreshToken,
      },
      headers: { authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}` },
    })
      .then((res) => {
        localStorage.removeItem("userLoggedToken");

        localStorage.removeItem("userRefreshToken");
        this.setState({ isClicked: true });
        this.refreshPage();
        // notify.show("Logged Out Successfully","custom",2000,customNotify)
      })
      .catch((err) => {});
  };
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
                href="/DrawingBoard"
                target="_blank"
                rel="noopener noreferrer"
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
              <a href="/Profile" id="navLink">
                <hr className="d-md-none"></hr>{" "}
                <li
                  className={
                    this.state.active === "Profile"
                      ? "nav-item mx-3 px-3 active"
                      : "nav-item mx-3 px-3"
                  }
                  onClick={() => {
                    this.changed();
                    window.location.href = "/Profile";
                  }}
                >
                  Profile
                </li>
              </a>
            </ul>

            <div className="btn-grp">
              <button
                onClick={this.signout}
                className="btn signin-nav btn-lg btn-dark btn-block"
                name="SignOut"
              >
                Sign Out
              </button>
              {this.state.isClicked === true ? <Redirect to="/" /> : null}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default LogoutNavbar;
