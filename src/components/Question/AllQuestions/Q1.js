import React from 'react';
import axios from 'axios';
// import Q2 from './Q2.js';
import './Q1.css';
import CompilerCheck from '../CompilerCheck.js';

class Q1 extends React.Component {
      constructor(props) {
            super(props);

            this.state = {

                  question:{
                        name:'',
stmnt:'',
input:'',
output:'',
loc:''

}
            }

      }

      componentDidMount() {
const str = window.location.pathname;
const slug = str.substring(13)
console.log(str);
console.log(slug);
            axios.get(`https://codeitoutserver.herokuapp.com/api/question/${slug}`).then((res) => {
                  this.setState({
...this.state,
question: res.data});
            });


    }

      render() {
            // const {questions} = this.state
            const id =this.props.qu
console.log(id);
            return (
<div className = "Q1" >
                  <div  className="container prob-container">
                        <h3 className="prob-head-q1">
                                    {this.state.question.problemName}</h3>
                                    <h3 className="prob-name-q1">
                                                Problem Statement</h3>
                              <p className="prob-stmnt">{this.state.question.problemDesc}</p>
                              <h3 className="prob-input-head">
                                    Input</h3>
                              <p className="prob-input">
                                    {this.state.question.problemInputDesc}
                              </p>

                              <h3 className="prob-input-head">
                                    Output</h3 >
                              <p className="prob-input">
                                    {this.state.question.problemOutputDesc}
                              </p>
                              <h5 className="prob-time">
                                    Time: 1 sec </h5 >
                        </div >
                        <CompilerCheck ansid={id} tc={this.state.question.input} ans ={this.state.question.ans} problemName={this.state.question.problemName} />
</div>
)
      }
}

export default Q1;
