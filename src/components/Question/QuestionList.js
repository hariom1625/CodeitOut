import React from 'react';
import './QuestionList.css';
import axios from 'axios';
import Loader from '../Loader/Loader.js';
// import Q2 from './AllQuestions/Q2.js';
import Q1 from './AllQuestions/Q1.js';

// import ScrollToTop from '../StTop.js';

import { Link} from 'react-router-dom';

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

            axios.get("https://codeitoutserver.herokuapp.com/api/question").then((res) => {
                  this.setState({questions: res.data});


                                    if(res.data>0){
                  this.setState({loaded:true})
                  }
                  else{
                  this.setState({loaded:true})
                  }
            });



      }

      onHandleClick = (event)=> {
const id = event;
// console.log(id);
this.setState({customLink:id});
<Q1 qu ={id}/>

      }
      render() {
// const q=1;

if(this.state.loaded){
return(
      (<div className="container-fluid">

                        <h1 className="ql-heading">
                              Question List

                        </h1>

{
      this.state.questions.map((question) => (

                        <div key={question.id} className="container prob-container">
                              <div class="list-group">
<Link to={`/questionlist/${question.problemCode}`}>
                                <button type="button" onClick = {(event) => {this.onHandleClick(question.id)}} className=" prob-btn list-group-item list-group-item-action active" aria-current="true">
                                {question.problemName}
                                </button>
</Link>
                              </div>


</div>
))}



</div>
)

)}


else{
if(!this.state.loaded){
return (

<div className="loader"><Loader message="Loading"/></div>
)
}
}

}

}



export default QuestionList;
// {this.state.questions.map((question) => (<p key={question.id}>{question.problem}</p>))}
