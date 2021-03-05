import React from 'react';
import './QuestionList.css';
import axios from 'axios';
// import Q2 from './AllQuestions/Q2.js';
import Q1 from './AllQuestions/Q1.js';

// import ScrollToTop from '../StTop.js';

// import { Link} from 'react-router-dom';
// import { Link} from 'react-router-dom';

// import styled from 'styled-components';

// import {qlist as qlist} from './questionslist.js';
// const Text = styled.Text;
class QuestionList extends React.Component {
      constructor(props) {
            super(props);

            this.state = {

                  questions: [],
                  customLink:0,
            }

      }

      componentDidMount() {

            axios.get("https://codeitoutserver.herokuapp.com/questionlist.json").then((res) => {
                  this.setState({questions: res.data});
            });



      }

      onHandleClick = (event)=> {
const id = event;
this.setState({customLink:id});

      }
      render() {
// const q=1;
return(
      (<div className="container-fluid">

                        <h1 className="ql-heading">
                              Question List

                        </h1>

{
      this.state.questions.map((question) => (

                        <div key={question.id} className="container prob-container">
                              <div class="list-group">
                                <button type="button" onClick = {(event) => {this.onHandleClick(question.id)}} className=" prob-btn list-group-item list-group-item-action active" aria-current="true">
                                {question.problemName}
                                </button>

                              </div>


</div>
))}

<Q1 qu ={this.state.customLink}/>



</div>
))}

}



export default QuestionList;
// {this.state.questions.map((question) => (<p key={question.id}>{question.problem}</p>))}