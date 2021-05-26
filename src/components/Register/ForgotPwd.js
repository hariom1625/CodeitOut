import React from 'react';
import './SignUp.css';
import axios from 'axios'
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let loggedIn = true

let customNotify = {
background:"#000",
text:"#fff"

}

// function refreshPage ()  {
// setTimeout( () => {
// window.location.reload(false)
// },50);
// console.log("Reload")
// }
toast.configure()

class ForgotPwd extends React.Component {

      constructor(props) {

            super(props);
            const userLoggedtoken = localStorage.getItem("userLoggedToken")
           if(userLoggedtoken===null){
           loggedIn = false
           }
      this.state = {
                  email: '',
                  password: '',
cnfmPassword:'',
resp:false,
loggedIn
            }

            // this.onChange = this.onChange.bind(this)
            // this.onFormSubmit = this.onFormSubmit.bind(this)
      }

      onChange = (event)=>{
            event.preventDefault()

            this.setState({
                  [event.target.name]: event.target.value
            })
      }

      onFormSubmit = (e) => {
            e.preventDefault()
            const {email, password,cnfmPassword} = this.state

            const resetPassword = {email,password,cnfmPassword}

            axios.put('https://codeitoutserver.herokuapp.com/api/User/forgotPwd',resetPassword,{

            headers:{
            authorization:`Bearer ${process.env.REACT_APP_TC_TOKEN}`
            }
            })
            .then((res) =>{

this.setState({resp:true})
})
            .catch(err =>{
notify.show(err.response.data,"custom", 2000, customNotify)


            });

      }

notify = () =>{
toast("Hello World.....!!!!!")
}
      render() {
if(this.state.resp===true){
return(
<Redirect to="forgotVerify" />
)
}
      return(
<div className="signin">
      <Notifications/>
      <ToastContainer/>
      <div className="outer">
      <div className="inner">
            <form  onSubmit= {this.onFormSubmit}>

                            <h3>Reset Password</h3>

                            <div className="form-group">
                                <label>E-mail</label>
                                      <input type="email" name="email" className="form-control " value={this.state.email} onChange={this.onChange} placeholder="Username"/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                      <input type="text" name="password" className="form-control " value={this.state.password} onChange={this.onChange} placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                      <input type="text" name="cnfmPassword" className="form-control " value={this.state.cnfmPassword} onChange={this.onChange} placeholder="Confirm Password"/>
                            </div>


                            <button onClick={this.notify} className="btn  btn-lg btn-dark btn-block" type="submit" name="signup">Sign In</button>

                        </form>
      </div>
      </div>
</div>
);

      }
}

export default ForgotPwd;
