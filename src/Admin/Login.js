import React from 'react';
import './Admin.css';

import {Redirect} from 'react-router-dom';
class Login extends React.Component {

      constructor(props) {

            super(props);
const token = localStorage.getItem("token")
            let loggedIn = true
if(token===null){
loggedIn = false
}
            this.state = {
                  username: '',
                  password: '',
                  loggedIn
            }

            // this.onChange = this.onChange.bind(this)
            // this.onFormSubmit = this.onFormSubmit.bind(this)
      }

      onChange = (event)=>{

            this.setState({
                  [event.target.name]: event.target.value
            })
      }

      onFormSubmit = (e) => {
            e.preventDefault()
            const {username, password} = this.state

//             if (username === 'A' && password === 'H') {
// localStorage.setItem("token","AH")
//                   this.setState({loggedIn: true})
//             }
      }
      render() {

            if (this.state.loggedIn) {
                  return <Redirect to="/adminPage"/>
            }

            return (<div className="admin-login">
                  <form onSubmit={this.onFormSubmit}>
                        <h3 className="h3 signup mb-3 font-weight-normal">Admin</h3>

                        <input type="text" name="username" className="form-control  bottom email-input" value={this.state.username} onChange={this.onChange} placeholder="Username" required autofocus/>
                        <input type="password" name="password" className="form-control bottom pass-input" value={this.state.password} onChange={this.onChange} placeholder="Password " required autofocus/>


                        <button className="btn admin-btn btn-lg btn-primary btn-block" type="submit" name="signin">Sign in</button>

                  </form>

            </div>)
      }
}

export default Login;
// <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
// <br/>
// <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
// <br/>
// <input type="submit"/>

// </div>
//
