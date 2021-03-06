import React from "react";
import "./SignUp.css";
import axios from "axios";
import "./SignIn.css";
import Loader from "../Loader/Loader.js";

import Notifications, { notify } from "react-notify-toast";
// import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
let loggedIn = true;

let customNotify = {
  background: "#000",
  text: "#fff",
};

// function refreshPage() {
//       setTimeout(() => {
//             window.location.reload(false)
//       }, 50);
// }

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    const userLoggedtoken = localStorage.getItem("userLoggedToken");
    if (userLoggedtoken === null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      accessToken: "",
      refreshToken: "",
      redirect: "/",
    };

    // this.onChange = this.onChange.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  onChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    const userLogin = {
      username,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/api/User/login`, userLogin, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data > 0) {
          this.setState({ loaded: true });
        } else {
          this.setState({ loaded: true });
        }
        if (res.data === false) {
          notify.show("Wrong Password", "custom", 2000, customNotify);

          this.setState({ loggedIn: false });
        } else {
          notify.show("Logged In Successfully", "custom", 2000, customNotify);
          loggedIn = true;
          this.setState({
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          });
          localStorage.setItem("userLoggedToken", this.state.accessToken);
          localStorage.setItem("userRefreshToken", this.state.refreshToken);
        }
      })
      .catch((err) => {
        this.setState({ loaded: true });
        if (err.response.status === 400) {
          notify.show("Not Registered", "custom", 2000, customNotify);
        } else {
          notify.show(err.response.message, "custom", 2000, customNotify);
        }
      });
  };

  render() {
    if (this.state.loaded) {
      if (loggedIn === true) {
        return (
          <div>
            <Notifications />
            <a href="/profile">
              <button
                className="btn signin-btn btn-lg btn-dark btn-block"
                type="submit"
                name="signup"
              >
                Go to Profile
              </button>
            </a>
          </div>
        );
      } else {
        return (
          <div className="signin">
            <Notifications />
            <div className="outer">
              <div className="inner">
                <form onSubmit={this.onFormSubmit}>
                  <h3>Sign In</h3>

                  <div className="form-group">
                    <label>Username</label>
                    <input
                      required
                      type="text"
                      name="username"
                      className="form-control "
                      value={this.state.username}
                      onChange={this.onChange}
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      required
                      type="password"
                      name="password"
                      className="form-control "
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={this.notify}
                    className="btn  btn-lg btn-dark btn-block"
                    type="submit"
                    name="signup"
                  >
                    Sign In
                  </button>
                  <Link to="/ForgotPassword">
                    <p className="forgot-password text-right">
                      Forgot Password?
                    </p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        );
      }
    } else {
      if (!this.state.loaded) {
        return (
          <div className="loader">
            <Loader message="Loading" />
          </div>
        );
      }
    }
  }
}

export default SignIn;
// <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
// <br/>
// <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
// <br/>
// <input type="submit"/>
// <label><span className="label-form">Username </span></label>

// </div>
//
