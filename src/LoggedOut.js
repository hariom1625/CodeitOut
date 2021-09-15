import React from "react";
// import './App.css';
import Home from "./components/Home/Home.js";
import LoginNavbar from "./components/Navbar/LoginNavbar.js";
import QuestionList from "./components/Question/QuestionList.js";
import Resources from "./components/Resources.js";
import Instructions from "./components/Instructions/Instructions.js";
import DrawingBoard from "./components/DrawingBoard/DrawingBoard.js";
import Footer from "./components/Footer/Footer.js";
import ScrollToTop from "./components/StTop.js";
import AdminLogin from "./Admin/Login.js";
import AdminPage from "./Admin/AdminPage.js";
import Logout from "./Admin/Logout.js";
import SignUp from "./components/Register/SignUp.js";
import SignIn from "./components/Register/SignIn.js";
import Verify from "./components/Register/OtpVerify.js";
import Success from "./components/Register/Success.js";
import Failure from "./components/Register/Failure.js";
import Error from "./components/Error/Error.js";
import axios from "axios";
import ASU from "./components/Register/AfterSignUp.js";

import Q1 from "./components/Question/AllQuestions/Q1.js";
import Profile from "./components/Register/Profile.js";
import ForgotPwd from "./components/Register/ForgotPwd.js";
import ForgotVerify from "./components/Register/ForgotVerify.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class LoggedOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      loggedIn: false,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("userLoggedToken");
    if (token) {
      axios
        .get(`${process.env.REACT_APP_SERVER}/api/User/login-success`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.setState({ loggedIn: res.data });
        })
        .catch((err) => {
          this.setState({ loggedIn: false });
        });
    }

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <LoginNavbar />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/QuestionList" component={QuestionList} />
              <Route
                exact
                path="/Questionlist/:addr"
                urlString={`/QuestionList/:addr`}
                component={Q1}
              />
              <Route exact path="/Resources" component={Resources} />
              <Route exact path="/Instructions" component={Instructions} />
              <Route
                exact
                path="/DrawingBoard"
                component={ScrollToTop(DrawingBoard)}
              />
              <Route exact path="/Logout" component={ScrollToTop(Logout)} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/ASU" component={ASU} />
              <Route exact path="/Verify" component={ScrollToTop(Verify)} />
              <Route exact path="/Success" component={ScrollToTop(Success)} />
              <Route exact path="/Failure" component={ScrollToTop(Failure)} />
              <Route exact path="/Profile" component={Profile} />
              <Route
                exact
                path="/ForgotPassword"
                component={ScrollToTop(ForgotPwd)}
              />
              <Route
                exact
                path="/ForgotVerify"
                component={ScrollToTop(ForgotVerify)}
              />
              <Route exact path="/adminLogin" component={AdminLogin} />
              <Route exact path="/adminPage" component={AdminPage} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default LoggedOut;
