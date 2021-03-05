import React from 'react';
import './Home.css';
import Compiler from './Compiler.js';
// import Q1 from './Question/Q1.js';
import ParticlesBg from 'particles-bg'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import axios from 'axios';

class Home extends React.Component {
      // state = {
      //       users:``
      // }

      // componentDidMount() {
      //       axios.get("http://localhost:4000/").then((res) => {
      //
      //             this.setState({users: res.data});
      //
      //       })
      // }
      render() {


            const config = {
                  position: {
                        width: 100,
                        height: 30
                  }
            };

            return (<div className="home">
                  <div>
                        <ParticlesBg type="polygon" config={config} bg={true}/>

                  </div>

                  <h2 className="home-heading-1">
                        <i className="fas code-home fa-code"></i>Code</h2>
                  <h2 className="home-heading-2">
                        <i class="fas  code-home fa-cogs"></i>
                        Run</h2>

                  <h1 className="home-heading-3">
                        Compile
                  </h1>

                  <h3 className="home-heading-4">
                        "If you lie to the compiler, it will have its revenge."
                        <br/>
                        <br/>
                        <h4 className="quote-name">— Henry Spencer.</h4>
                  </h3>

                  <Compiler/>




            </div>);
      }
}

export default Home;
// <ul>
// {this.state.users.map(user =>
//
// <li key = {user.id}>
// {user.username}
// </li>
// )}</ul>

// {users.map((user) => (
//       <li>{user.username}</li>
// ))}
