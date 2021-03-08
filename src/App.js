import React from 'react';
// import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import QuestionList from './components/Question/QuestionList.js';
import Footer from './components/Footer.js';
import Resources from './components/Resources.js';
import ScrollToTop from './components/StTop.js';
import Q1 from './components/Question/AllQuestions/Q1.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

      render() {

            return (<div className="App">
                  <Router>
                        <div>
                              <Navbar/>
                              <Switch>
                                    <Route exact path="/" component ={ScrollToTop(Home)}/>

                                          <Route exact path="/QuestionList" component={ScrollToTop(QuestionList)}/>
                                          <Route exact path="/Questionlist/:slug" urlString={`/QuestionList/:slug`} component={ScrollToTop(Q1)}/>
                                                <Route exact path="/Resources" component={ScrollToTop(Resources)}/>


                              </Switch>

                        </div>

                  </Router>
                  <Footer/>

            </div>);
      }
}

export default App;
// <Route  path={`/Q${x}`} component={ScrollToTop(Q1)}/>
