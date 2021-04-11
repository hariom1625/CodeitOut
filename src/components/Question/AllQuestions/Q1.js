import React from 'react';
import axios from 'axios';
// import Q2 from './Q2.js';
import {Link} from 'react-router-dom';
import Loader from '../../Loader/Loader.js';
import './Q1.css';
import CompilerCheck from '../CompilerCheck.js';

class Q1 extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  questions: []
                  //                   question:{
                  //                         name:'',
                  // stmnt:'',
                  // input:'',
                  // output:'',
                  // loc:''
                  //
                  // }
            }

      }

      componentDidMount() {
            const str = window.location.pathname;
            const addr = str.substring(13)
            console.log(str);
            console.log(addr);
            axios.get(`http://localhost:4000/api/question/${addr}`).then((res) => {
                  this.setState({questions: res.data});
                  console.log(this.state.question);
                  if (res.data > 0) {

                        this.setState({loaded: true})
                  } else {
                        this.setState({loaded: true})
                  }
                  window.scrollTo(0, 0);

            });

      }

      render() {
            // const {questions} = this.state
            const id = this.props.qu
            // console.log(id);
            const que = this.state.questions.map((question) => {
                  return (<div className="Q1">

                        <div className="container prob-container">
                              <h3 className="prob-head-q1">
                                    {question.problemName}</h3>
                              <h3 className="prob-name-q1">
                                    Problem Statement</h3>
                              <p className="prob-stmnt">{question.problemDesc}</p>
                              <h3 className="prob-input-head">
                                    Input</h3>
                              <p className="prob-input">
                                    {question.problemInputDesc}
                              </p>

                              <h3 className="prob-input-head">
                                    Output</h3 >
                              <p className="prob-input">
                                    {question.problemOutputDesc}
                              </p>
                              <h5 className="prob-time">
                                    Time: {question.time}
                              </h5 >
                        </div >
<div className="container">
                        <CompilerCheck ansid={id} tc={question.input} ans ={question.ans} problemName={question.problemName}/>
</div>
<button className="btn btn-dark instruct-btn btn-lg">
                              <Link className="instruct-link" to="/Instructions">
                                    Read Instructions</Link>
                        </button>
                  </div>)
            })

            if (this.state.loaded) {
return(
                  <div>
                        {que}
                  </div>
)

            } else {
                  if (!this.state.loaded) {
                        return (<div className="loader"><Loader message="Loading"/></div>)
                  }
            }
      }
}

export default Q1;
