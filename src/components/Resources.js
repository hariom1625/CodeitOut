import React from 'react';
import axios from 'axios';
import './Instructions/Instructions.css'
// import CompilerCheck from './Question/CompilerCheck.js';
// import Q2 from './Question/AllQuestions/Q2.js';

class Resources extends React.Component {
      constructor(props) {
            super(props);

            this.state = {

                  questions: []
            }

      }

      componentDidMount() {

            axios.get(" https://codeitoutserver.herokuapp.com/questionlist.json").then((res) => {
                  this.setState({questions: res.data});
            });
            // axios.get("http://localhost:4000/answer.json").then((res) => {
            //       this.setState({questions: res.data});
            // });
      }

      render() {
            // const {questions} = this.state

return (
<div>
<h1 className="instruct-head-1">Updating Soon ..!!!!!</h1>
</div>

      )
}
}

export default Resources;
