import React from 'react';
// import './App.css';
import Home from './components/Home/Home.js';
import LogoutNavbar from './components/Navbar/LogoutNavbar.js';
import QuestionList from './components/Question/QuestionList.js';
import Resources from './components/Resources.js';
import Instructions from './components/Instructions/Instructions.js';
import DrawingBoard from './components/DrawingBoard/DrawingBoard.js';
import Footer from './components/Footer/Footer.js';
import ScrollToTop from './components/StTop.js';
import Login from './Admin/Login.js';
import AdminPage from './Admin/AdminPage.js';
import Logout from './Admin/Logout.js';
import SignUp from './components/Register/SignUp.js';
import SignIn from './components/Register/SignIn.js';
import SignOut from './components/Register/SignOut.js';
import Verify from './components/Register/OtpVerify.js';
import Success from './components/Register/Success.js';
import Failure from './components/Register/Failure.js';
import Profile from './components/Register/Profile.js';
import ForgotPwd from './components/Register/ForgotPwd.js';
import ForgotVerify from './components/Register/ForgotVerify.js';


import ASU from './components/Register/AfterSignUp.js';

import Q1 from './components/Question/AllQuestions/Q1.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class LoggedIn extends React.Component {

      constructor(props) {
            super(props);

            this.state = {
                  name: '',
                  loggedIn: false
            }

      }
      componentDidMount() {
            // axios.get('http://localhost:4000/api/User/login-success', {
            //       headers: {
            //             Authorization: `Bearer ${localStorage.getItem("userLoggedToken")}`
            //       }
            //
            // }).then((res) => {
            //       this.setState({loggedIn:res.data})
            //
            //
            //        console.log(this.state.userDetail)
            //
            // }).catch((err) => {
            //       this.setState({loggedIn:false})
            //       console.log(err)
            //
            // })

            window.scrollTo(0, 0);

      }

      render() {

            return (<div className="App">

                  <Router>
                        <div>

                              <LogoutNavbar/>
                              <Switch>
                                    <Route exact path="/" component={Home}/>

                                    <Route exact path="/QuestionList" component={QuestionList}/>
                                    <Route exact path="/Questionlist/:addr" urlString={`/QuestionList/:addr`} component={Q1}/>
                                    <Route exact path="/Resources" component={Resources}/>
                                    <Route exact path="/Instructions" component={Instructions}/>
                                    <Route exact path="/Drawing" component={ScrollToTop(DrawingBoard)}/>
                                    <Route exact path="/Admin/Login" component={ScrollToTop(Login)}/>
                                    <Route exact path="/AdminPage" component={ScrollToTop(AdminPage)}/>
                                    <Route exact path="/Logout" component={ScrollToTop(Logout)}/>
                                    <Route exact path="/SignUp" component={(props) => (<SignUp timestamp={new Date().toString()} {...props}/>)}/>
                                    <Route exact path="/SignIn" component={(props) => (<SignIn timestamp={new Date().toString()} {...props}/>)}/>
                                    <Route exact path="/ASU" component={(props) => (<ASU timestamp={new Date().toString()} {...props}/>)}/>
                                    <Route exact path="/SignOut" component={(props) => (<SignOut timestamp={new Date().toString()} {...props}/>)}/>
                                    <Route exact path="/Verify" component={ScrollToTop(Verify)}/>
                                    <Route exact path="/Success" component={ScrollToTop(Success)}/>
                                    <Route exact path="/Failure" component={ScrollToTop(Failure)}/>
                                    <Route exact path="/Profile" component={(props) => (<Profile timestamp={new Date().getTime().toString()} {...props}/>)}/>
                                          <Route exact path="/ForgotPassword"  component={ScrollToTop(ForgotPwd)}/>
                                                <Route exact path="/ForgotVerify"  component={ScrollToTop(ForgotVerify)}/>

                              </Switch>

                        </div>

                  </Router>
                  <Footer/>

            </div>);

      }
}

export default LoggedIn;
// <Route  path={`/Q${x}`} component={ScrollToTop(Q1)}/>
// <GoogleLogin buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle} cookiePolicy={'single_host_origin'}/>
// responseGoogle = (response) => {
//       console.log(response);
//       console.log(response.profileObj);
// }
