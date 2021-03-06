import React from 'react';
import './CompilerCheck.css';

import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';

class Compiler extends React.Component {
      constructor(props) {

            super(props);

            this.state = {
                  users: ``,
                  input: localStorage.getItem('input') || ``,
                  output: ``,
                  userInput: ``,
                  language_id: localStorage.getItem('language_id') || 54,
answers:[],
tc:0,
ans:0,
verdict: "",
icon:""
            };
      }

      componentDidMount() {
            axios.get("https://codeitoutserver.herokuapp.com/answer.json").then((res) => {

                  this.setState({answers: res.data});

console.log(this.state.answers);


            })


      }


      editorDidMount(editor, monaco) {
            console.log('editorDidMount', editor);
            editor.focus();

      }
      onChange = (newValue, e) => {
            console.log('onChange', newValue, e);
            this.setState({input: newValue});
            localStorage.setItem('input', newValue);

      }

      // input = (event) => {
      //       this.setState({input: event.target.value});
      //       localStorage.setItem('input', event.target.value);
      // };

      userInput = (event) => {
            event.preventDefault();

            this.setState({user_input: event.target.value});
            console.log(this.state.user_input);

      };

      language = (event) => {

            event.preventDefault();
            this.setState({language_id: event.target.value});
            localStorage.setItem('language_id', event.target.value);

      };

            run = async (e) => {
                  e.preventDefault();
                  let outputText = document.getElementById("output");
                  outputText.innerHTML = "";
                  outputText.innerHTML += "Creating Submission\n";
                  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
                        method: "POST",
                        headers: {
                              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                              "x-rapidapi-key": "e535d12d26msh1fe73d90a985d7ap1b0b2ajsnacb9e34ab20e",
                              "content-type": "application/json",
                              accept: "application/json"
                        },
                        body: JSON.stringify({source_code: this.state.input, stdin: this.state.user_input, language_id: this.state.language_id})
                  });

                  outputText.innerHTML += "Submission Created/n";
                  const jsonResponse = await response.json();

                  let jsonGetSolution = {

                        status: {
                              description: "Queue"
                        },
                        stderr: null,
                        compile_output: null
                  };

                  while (jsonGetSolution.status.description !== "Accepted" && jsonGetSolution.stderr == null && jsonGetSolution.compile_output == null) {

                        outputText.innerHTML = `Status: ${jsonGetSolution.status.description}`;

                        if (jsonResponse.token) {
                              let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                              const getSolution = await fetch(url, {
                                    method: "GET",
                                    headers: {
                                          "x-rapidapi-key": "e535d12d26msh1fe73d90a985d7ap1b0b2ajsnacb9e34ab20e",
                                          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                                          "content-type": "application/json"
                                    }
                              });

                              jsonGetSolution = await getSolution.json();

                        }

                  }

                  if (jsonGetSolution.stdout) {
                        const output = atob(jsonGetSolution.stdout);

                        // const test = this.state.users.message;

                        outputText.innerHTML = "";

                        outputText.innerHTML += `Output:\n${output}\nExecution Time: ${jsonGetSolution.time} Secs\nMemory Used : ${jsonGetSolution.memory} bytes`;
                        // if (output === test)
                        //       outputText.innerHTML += "\n\nCorrect Answer";
                        // else
                        //       outputText.innerHTML += "\n\nWrong Answer";
                        //
                         }
                  else if (jsonGetSolution.stderr) {
                        const error = atob(jsonGetSolution.stderr);

                        outputText.innerHTML = "";
                        outputText.innerHTML += `\n Error : ${error}`;
                  } else {
                        const compilation_error = atob(jsonGetSolution.compile_output);

                        outputText.innerHTML = "";
                        outputText.innerHTML += `\n Error: ${compilation_error}`;
                  }

            };

            submit = async (e) => {
                  e.preventDefault();

                  let outputText = document.getElementById("output");
                  outputText.innerHTML = "";
                  outputText.innerHTML += "Creating Submission\n";
// console.log(this.props.tc);
                  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
                        method: "POST",
                        headers: {
                              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                              "x-rapidapi-key": "e535d12d26msh1fe73d90a985d7ap1b0b2ajsnacb9e34ab20e",
                              "content-type": "application/json",
                              accept: "application/json"
                        },

                        body: JSON.stringify({source_code: this.state.input, stdin: this.props.tc, language_id: this.state.language_id})
                  });

                  outputText.innerHTML += "Submission Created/n";
                  const jsonResponse = await response.json();

                  let jsonGetSolution = {

                        status: {
                              description: "Queue"
                        },
                        stderr: null,
                        compile_output: null
                  };

                  while (jsonGetSolution.status.description !== "Accepted" && jsonGetSolution.stderr == null && jsonGetSolution.compile_output == null) {

                        outputText.innerHTML = `Status: ${jsonGetSolution.status.description}`;

                        if (jsonResponse.token) {
                              let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                              const getSolution = await fetch(url, {
                                    method: "GET",
                                    headers: {
                                          "x-rapidapi-key": "e535d12d26msh1fe73d90a985d7ap1b0b2ajsnacb9e34ab20e",
                                          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                                          "content-type": "application/json"
                                    }
                              });

                              jsonGetSolution = await getSolution.json();

                        }

                  }

                  if (jsonGetSolution.stdout) {
                        const output = atob(jsonGetSolution.stdout);

      const test = JSON.stringify(output);
      const t1 = JSON.stringify(this.props.ans)

      //
      //
      // {
      // this.state.answers.map((answer)=>{
      //
      // if(this.props.ansid===answer.id){
      // return(
      // this.setState({
      // ans:answer.ans,
      // tc:answer.tc})
      // )
      // }
      // })
      // }
      // const tc1 = JSON.stringify(this.state.tc)
      //
      // console.log(t1);
      // console.log(tc1);
                        outputText.innerHTML = "";

                        outputText.innerHTML += `\nExecution Time: ${jsonGetSolution.time} Secs\nMemory Used : ${jsonGetSolution.memory} bytes`;
                        if (t1===test){
      this.setState({
verdict:"Correct Answer",
icon:"far fa-check-circle correct fa-3x"
})
}
                        else{
                              this.setState({
                        verdict:"Wrong Answer",
                        icon:"far wrong fa-times-circle fa-3x"
                        })
}
                        }
                  else if (jsonGetSolution.stderr) {
                        const error = atob(jsonGetSolution.stderr);

                        outputText.innerHTML = "";
                        outputText.innerHTML += `\n Error : ${error}`;
                  } else {
                        const compilation_error = atob(jsonGetSolution.compile_output);

                        outputText.innerHTML = "";
                        outputText.innerHTML += `\n Error: ${compilation_error}`;
                  }

            };

      render() {

            const options = {
                  selectOnLineNumbers: true,
                  autoIndent: "full",

                  autoClosingQuotes: "languageDefined",
                  autoClosingBrackets: "always",
                  codeLensFontSize: 100,
                  cursorBlinking: "blink",
                  matchBrackets: "always",
                  fontSize: 14,
                  formatOnType: true,
                  glyphMargin: true
            };

            return (<div >
                  <div className="row editor container-fluid">

                        <div className="col-lg-7 col-md-12 col-sm-12">
                              <label for="solution">
                                    <span class="badge heading-2 bg-secondary">Code
                                          <i class="fas source-logo fa-server"></i>
                                    </span>
                              </label>
                              <MonacoEditor className="monaco" width="650" height="500" language={this.state.language} theme="vs-dark" options={options} value={this.state.input} onChange={this.onChange} editorDidMount={this.editorDidMount}/>


                                    <button type="submit" className="btn btn-dark run-btn btn-lg" onClick={this.run}>
                                                                        <i class="fas run-icon fa-cogs"></i>Run
                                                                  </button>
<button type="submit" className="btn btn-dark run-btn btn-lg" onClick={ this.submit}>
                                    <i class="fas run-icon fa-cogs"></i>Submit
                              </button>
                              <label for="tags">
                                    <b className="language-opt">Language</b>
                              </label>
                              <select value={this.state.language} onChange={this.language} id="tags" className="form-control form-inline mb-2 language">

                                    <option value="54">C++</option>
                                    <option value="50">C</option>
                                    <option value="62">JAVA</option>
                                    <option value="63">JAVASCRIPT</option>
                                    <option value="71">PYTHON</option>
                              </select>

                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                              <span className="badge badge-in heading bg-secondary">Input
                                    <i className="fas input-btn fa-keyboard"></i>
                              </span>
                              <br/>

                              <textarea className="input" id="input" onChange={this.userInput}></textarea>
                              <br/>
                              <span class="badge  badge-in heading-1 bg-secondary">Output
                                    <i className="fas input-btn fa-laptop-code"></i>
                              </span>
                              <br/>

                              <textarea id="output" className="output"></textarea>
                        </div>

<div className="verdict-cont container">
<p><span className="verdict-def">Verdict: </span> <i className={this.state.icon}><span className="verdict-text">{this.state.verdict}</span></i></p>


</div>

                  </div>

            </div>

);

      }

}
// <i className={this.state.icon}><span className="verdict-text">{this.state.verdict}</span></i>

// far fa-check-circle correct fa-2x
// far wrong fa-times-circle fa-3x
export default Compiler;
