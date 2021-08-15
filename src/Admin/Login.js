import React from "react";
import "./Admin.css";
import Notifications, { notify } from "react-notify-toast";
import axios from "axios";
import { Redirect } from "react-router-dom";

let customNotify = {
  background: "#000",
  text: "#fff",
};
let loggedIn = true;

class Login extends React.Component {
  constructor(props) {
    super(props);
    const alt = localStorage.getItem("alt");
    if (alt === null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      accessToken: "",
      refreshToken: "",
      loggedIn,
    };

    // this.onChange = this.onChange.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 200);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    const adminLogin = {
      username,
      password,
    };
    console.log(adminLogin);
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/admin/adminLogin`, adminLogin)
      .then((res) => {
        console.log(res);
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
          this.setState({
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          });
          localStorage.setItem("alt", this.state.accessToken); // alt: adminLoggedToken
          localStorage.setItem("art", this.state.refreshToken); // art: adminRefreshToken
          this.refreshPage();
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
    if (this.state.loggedIn === true) {
      return <Redirect to="/adminPage" />;
    }

    return (
      <div className="admin-login">
        <Notifications />

        <form onSubmit={this.onFormSubmit}>
          <h3 className="h3 signup mb-3 font-weight-normal">Admin</h3>

          <input
            type="text"
            name="username"
            className="form-control  bottom email-input"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="Username"
            required
            autofocus
          />
          <input
            type="password"
            name="password"
            className="form-control bottom pass-input"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password "
            required
            autofocus
          />

          <button
            className="btn admin-btn btn-lg btn-primary btn-block "
            type="submit"
            name="signin"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
// <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
// <br/>
// <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
// <br/>
// <input type="submit"/>

// </div>
//
