import React from 'react';
import './Compiler.css';
import MonacoEditor from 'react-monaco-editor';
// import axios from 'axios';

class Compiler extends React.Component {
      constructor(props) {

            super(props);

            this.state = {
                  users: ``,
                  input: localStorage.getItem('input') || ``,
                  output: ``,
                  userInput: ``,
                  language_id: localStorage.getItem('language_id') || 54,
lang:"cpp",
width:620,
height:600
            };
      }

      componentDidMount() {
            // axios.get("http://localhost:4000/").then((res) => {
            //
            //       this.setState({users: res.data});
            // })

window.addEventListener("resize",this.updateDimensions);
      }

componentWillUnmount(){
      window.removeEventListener("resize",this.updateDimensions);

}
      editorDidMount(editor, monaco) {
            editor.focus();

      }
      onChange = (newValue, e) => {
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
      };

      language = (event) => {

            event.preventDefault();
            this.setState({language_id: event.target.value});
            localStorage.setItem('language_id', event.target.value);



      };
updateDimensions = () => {
if(window.innerWidth>=1200){
      this.setState({
      width:620,
      height:600
      });
}
 if(window.innerWidth<1200){
      this.setState({
      width:500,
      height:400
      });
}
 if(window.innerWidth<=1024){
      this.setState({
      width:430,
      height:400
      });
}
if(window.innerWidth<=700){
     this.setState({
     width:320,
     height:320
     });
}
if(window.innerWidth<=350){
     this.setState({
     width:280,
     height:300
     });
}
if(window.innerWidth<=300){
     this.setState({
     width:250,
     height:280
     });
}
}

      submit = async (e) => {
            e.preventDefault();
            let outputText = document.getElementById("output");
            outputText.innerHTML = "";
            outputText.innerHTML += "Creating Submission\n";
            const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
                  method: "POST",
                  headers: {
                        "x-rapidapi-host":process.env.REACT_APP_RAPID_HOST,
                        "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
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
                                    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
                                    "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST,
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
                  EditorAutoClosingStrategy:"always",

                  // codeLensFontSize: 100,
                  cursorBlinking: "blink",
                  matchBrackets: "always",
                  fontSize: 14,
                  formatOnType: false,
                  glyphMargin: true
            };

            return (
<div className="container-fluid">
                  <div className="row editor">

                        <div className="col-lg-7 col-md-12 col-sm-12">
                              <label htmlFor="solution">
                                    <span className="badge heading-2 bg-secondary">Code
                                          <i className="fas source-logo fa-server"></i>
                                    </span>
                              </label>
                              <MonacoEditor className="monaco" width={this.state.width} height={this.state.height} language="cpp" theme="vs-dark" options={options} value={this.state.input} onChange={this.onChange} editorDidMount={this.editorDidMount}/>
      <button type="submit" className="btn btn-dark run-btn btn-lg" onClick={this.submit}>
                                          <i className="fas run-icon fa-cogs"></i>Run
                                    </button>
                                    <label htmlFor="tags">
                                          <b className="language-opt">Language</b>
                                                <select value={this.state.language_id} onChange={this.language} id="tags" className="form-control form-inline mb-2 language">

                                                      <option value="54">C++</option>
                                                      <option value="50">C</option>
                                                      <option value="62">JAVA</option>
                                                      <option value="63">JAVASCRIPT</option>
                                                      <option value="71">PYTHON</option>
                                                </select>
                                    </label>



                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                              <span className="badge badge-in heading bg-secondary">Input
                                    <i className="fas input-btn fa-keyboard"></i>
                              </span>
                              <br/>

                              <textarea className="input" id="input" onChange={this.userInput}></textarea>
                              <br/>
                              <span className="badge  badge-in heading-1 bg-secondary">Output
                                    <i className="fas input-btn fa-laptop-code"></i>
                              </span>
                              <br/>

                              <textarea id="output" className="output"></textarea>
                        </div>

                  </div>
</div>
            );

      }

}

export default Compiler;
