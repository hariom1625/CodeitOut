import React from 'react';
// import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import QuestionList from './components/Question/QuestionList.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/StTop.js';
import Q1 from './components/Question/AllQuestions/Q1.js';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {

      render() {

            return (<div className="App">
                  <Router>
                        <div>
                              <Navbar/>
                              <Switch>
                                    <Route exact path="/" component ={ScrollToTop(Home)}/>

                                    <Route  path="/QuestionList" component={ScrollToTop(QuestionList)}/>
                                          <Route  path="/Q1" component={ScrollToTop(Q1)}/>

                              </Switch>

                        </div>

                  </Router>
                  <Footer/>

            </div>);
      }
}

export default App;
// <Route  path={`/Q${x}`} component={ScrollToTop(Q1)}/>
