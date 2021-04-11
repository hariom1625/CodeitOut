import React from 'react';
// import axios from 'axios';
import CompilerCheck from '../CompilerCheck.js';
class Q2 extends React.Component {
      constructor(props) {
            super(props);

            this.state = {

                  questions: []
            }

      }

      componentDidMount() {

            // axios.get("http://localhost:4000/questionlist.json").then((res) => {
            //       this.setState({questions: res.data});
            // });
            // axios.get("http://localhost:4000/answer.json").then((res) => {
            //       this.setState({questions: res.data});
            // });
      }

      render() {
            // const {questions} = this.state
const id = this.props.qu;
            return (<div className="container-fluid">

                  {

                        this.state.questions.map(question => {


      if(question.id===id){
return (
      <div>
<div  className="container prob-container">
      <h3 className="prob-name">
                  {question.problemName}</h3>
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

      </div >
      <CompilerCheck ansid={id} tc={question.input} ans ={question.ans} />
</div>
);
}
else{

return (<div>-1</div>);
}



})
                  }
            </div>)
      }
}

export default Q2;
