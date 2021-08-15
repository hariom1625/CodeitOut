import React from "react";
import axios from "axios";
// import Q2 from './Q2.js';
import Loader from "../../Loader/Loader.js";
import "./Q1.css";
import CompilerCheck from "../CompilerCheck.js";

class Q1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      tc: [],
      //                   question:{
      //                         name:'',
      // stmnt:'',
      // input:'',
      // output:'',
      // loc:''
      //
      // }
    };
  }

  componentDidMount() {
    const str = window.location.pathname;
    const addr = str.substring(13);

    axios
      .get(`${process.env.REACT_APP_SERVER}/api/question/${addr}`, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}`,
        },
      })
      .then((res) => {
        this.setState({ questions: res.data });
        if (res.data > 0) {
          this.setState({ loaded: true });
        } else {
          this.setState({ loaded: true });
        }
        window.scrollTo(0, 0);
      })
      .catch((err) => {});
    const token1 = localStorage.getItem("userRefreshToken");

    axios
      .post(
        `${process.env.REACT_APP_SERVER}/api/user/token`,
        { token1 },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}`,
          },
        }
      )
      .then((res) => {
        axios
          .get(`${process.env.REACT_APP_SERVER}/api/question/answer${addr}`, {
            headers: {
              Authorization: `Bearer ${res.data.accessToken}`,
            },
          })
          .then((res) => {
            this.setState({ tc: res.data });
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }

  render() {
    // const {questions} = this.state
    const id = this.props.qu;
    const que = this.state.questions.map((question) => {
      return (
        <div key={question.id} className="Q1">
          <div className="container prob-container">
            <h3 className="prob-head-q1">{question.problemName}</h3>
            <h3 className="prob-name-q1">Problem Statement</h3>
            <p className="prob-stmnt">{question.problemDesc}</p>
            <h3 className="prob-input-head">Input</h3>
            <p className="prob-input">{question.problemInputDesc}</p>

            <h3 className="prob-input-head">Output </h3>
            <p className="prob-input">{question.problemOutputDesc}</p>
            <h5 className="prob-time">Time: {question.time}</h5>
          </div>
          <div className="container">
            <CompilerCheck
              ansid={id}
              tc={this.state.tc.input}
              problemName={question.problemName}
            />
          </div>
        </div>
      );
    });

    if (this.state.loaded) {
      return <div>{que}</div>;
    } else {
      if (!this.state.loaded) {
        return (
          <div className="loader">
            <Loader message="Loading" />
          </div>
        );
      }
    }
  }
}

export default Q1;
