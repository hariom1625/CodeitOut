import React from 'react';
// import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import QuestionList from './components/Question/QuestionList.js';
import Resources from './components/Resources.js';
import Instructions from './components/Instructions/Instructions.js';
import DrawingBoard from './components/DrawingBoard/DrawingBoard.js';

import Footer from './components/Footer.js';
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
                                          <Route exact path="/Questionlist/:addr" urlString={`/QuestionList/:addr`} component={ScrollToTop(Q1)}/>
                                                <Route exact path="/Resources" component={ScrollToTop(Resources)}/>
                                                      <Route exact path="/Instructions" component={ScrollToTop(Instructions)}/>
                                                            <Route exact path="/DrawingBoard" component={ScrollToTop(DrawingBoard)}/>

                              </Switch>

                        </div>

                  </Router>
                  <Footer/>

            </div>);
      }
}

export default App;
// <Route  path={`/Q${x}`} component={ScrollToTop(Q1)}/>
