import React from 'react';
import axios from 'axios';
import Q2 from './Q2.js';
class Q1 extends React.Component {
      constructor(props) {
            super(props);

            this.state = {

                  questions: []
            }

      }

      componentDidMount() {

            axios.get("https://codeitoutserver.herokuapp.com/questionlist.json").then((res) => {
                  this.setState({questions: res.data});
            });
      }

      render() {
            // const {questions} = this.state
            const id =this.props.qu
console.log(id);
            return (
<div>
<Q2 qu = {id}/>
</div>
)
      }
}

export default Q1;
