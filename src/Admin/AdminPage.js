import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import Notifications, { notify } from "react-notify-toast";

let customNotify = {
  background: "#000",
  text: "#fff",
};
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("alt");

    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
      id: 0,
      problemName: "",
      problemCode: "",
      problemDesc: "",
      problemInputDesc: "",
      problemOutputDesc: "",
      input: "",
      ans: "",
      time: "",
    };

    // this.onChange = this.onChange.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentDidMount() {
    const token = localStorage.getItem("alt");
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/admin/verifyAdmin`, token, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("alt")}`,
        },
      })
      .then((res) => {
        this.setState({ loggedIn: true });
      })
      .catch(() => {
        this.setState({ loggedIn: false });
      });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmitQuestion = (event) => {
    event.preventDefault();

    const {
      id,
      problemCode,
      problemName,
      problemDesc,
      problemInputDesc,
      problemOutputDesc,
      time,
    } = this.state;

    const que = {
      id,
      problemCode,
      problemName,
      problemDesc,
      problemInputDesc,
      problemOutputDesc,
      time,
    };
    const token = localStorage.getItem("alt");

    axios
      .post(`${process.env.REACT_APP_SERVER}/api/Question/addQuestion`, que, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        notify.show(
          "Problem Posted Successfully!",
          "custom",
          2000,
          customNotify
        );
      })
      .catch((err) => {
        notify.show(
          "Some error occured while posting Problem!",
          "custom",
          2000,
          customNotify
        );
      });
  };

  onFormSubmitAnswer = (event) => {
    event.preventDefault();

    const { id, problemCode, problemName, input, ans } = this.state;

    const que = {
      id,
      problemCode,
      problemName,
      input,
      ans,
    };
    const token = localStorage.getItem("alt");
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/Question/addAnswer`, que, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        notify.show("Answer added successfully!", "custom", 2000, customNotify);
      })
      .catch((err) => {
        notify.show(
          "Some error occured while posting Answer!",
          "custom",
          2000,
          customNotify
        );
      });
  };

  logout = () => {
    const refreshToken = localStorage.getItem("art");
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_SERVER}/api/admin/adminLogout`,
      data: {
        refreshToken: refreshToken,
      },
      headers: { authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}` },
    })
      .then((res) => {
        localStorage.removeItem("alt");

        localStorage.removeItem("art");
        this.setState({ loggedIn: false });
        this.refreshPage();
        // notify.show("Logged Out Successfully","custom",2000,customNotify)
      })
      .catch((err) => {});
  };
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/adminlogin" />;
    }
    if (this.state.loggedIn === true) {
      return (
        <div className="row admin-container container">
          <button
            onClick={this.logout}
            className="btn admin-logout-btn btn-lg btn-primary btn-block"
            type="submit"
            name="signin"
          >
            Logout
          </button>
          <Notifications />

          <div className="col-lg-6 col-md-12">
            <h1 className="heading-prob">Post Problem</h1>

            <form onSubmit={this.onFormSubmitQuestion}>
              <label>
                <span className="label-form">Enter Problem ID </span>
              </label>
              <input
                required
                type="text"
                name="id"
                className="form-control adminpage-input"
                value={this.state.id}
                onChange={this.onChange}
                placeholder="Enter Problem id"
              />
              <label>
                <span className="label-form">Problem Code </span>
              </label>
              <input
                required
                type="text"
                name="problemCode"
                className="form-control adminpage-input"
                value={this.state.problemCode}
                onChange={this.onChange}
                placeholder="Problem Code "
              />
              <label>
                <span className="label-form">Problem Name </span>
              </label>
              <input
                required
                type="text"
                name="problemName"
                className="form-control adminpage-input"
                value={this.state.problemName}
                onChange={this.onChange}
                placeholder="Problem Name "
              />
              <label>
                <span className="label-form">Problem Description </span>
              </label>
              <input
                required
                type="text"
                name="problemDesc"
                className="form-control adminpage-input"
                value={this.state.problemDesc}
                onChange={this.onChange}
                placeholder="Problem Description "
              />
              <label>
                <span className="label-form">Problem Input Description </span>
              </label>
              <input
                required
                type="text"
                name="problemInputDesc"
                className="form-control adminpage-input"
                value={this.state.problemInputDesc}
                onChange={this.onChange}
                placeholder="Problem Input Description "
              />
              <label>
                <span className="label-form">Problem Output Description </span>
              </label>
              <input
                required
                type="text"
                name="problemOutputDesc"
                className="form-control adminpage-input"
                value={this.state.problemOutputDesc}
                onChange={this.onChange}
                placeholder="Problem Output Description "
              />
              <label>
                <span className="label-form">Time Limit </span>
              </label>
              <input
                required
                type="text"
                name="time"
                className="form-control adminpage-input"
                value={this.state.time}
                onChange={this.onChange}
                placeholder="Time "
              />

              <button
                className="btn admin-btn btn-lg btn-primary btn-block"
                type="submit"
                name="signin"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="heading-prob">Post Answer</h1>

            <form onSubmit={this.onFormSubmitAnswer}>
              <label>
                <span className="label-form">Enter Problem ID </span>
              </label>
              <input
                required
                type="text"
                name="id"
                className="form-control adminpage-input"
                value={this.state.id}
                onChange={this.onChange}
                placeholder="Enter Problem id"
              />
              <label>
                <span className="label-form">Problem Code </span>
              </label>
              <input
                required
                type="text"
                name="problemCode"
                className="form-control adminpage-input"
                value={this.state.problemCode}
                onChange={this.onChange}
                placeholder="Problem Code "
              />
              <label>
                <span className="label-form">Problem Name </span>
              </label>
              <input
                required
                type="text"
                name="problemName"
                className="form-control adminpage-input"
                value={this.state.problemName}
                onChange={this.onChange}
                placeholder="Problem Name "
              />

              <label>
                <span className="label-form">Input </span>
              </label>
              <input
                required
                type="text"
                name="input"
                className="form-control adminpage-input"
                value={this.state.input}
                onChange={this.onChange}
                placeholder="Input "
              />
              <label>
                <span className="label-form">Answer </span>
              </label>
              <input
                required
                type="text"
                name="ans"
                className="form-control adminpage-input"
                value={this.state.ans}
                onChange={this.onChange}
                placeholder="Answer "
              />

              <button
                className="btn admin-btn btn-lg btn-primary btn-block"
                type="submit"
                name="signin"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          return <Redirect to="/adminPage" />;
        </div>
      );
    }
  }
}

export default AdminPage;
