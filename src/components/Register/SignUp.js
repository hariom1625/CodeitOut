import React from 'react';
import './SignUp.css';
import axios from 'axios'
import Notifications, {notify} from 'react-notify-toast';

import {Redirect} from 'react-router-dom';


let customNotify = {
background:"#000",
text:"#fff"

}
// import {Redirect} from 'react-router-dom';
class SignUp extends React.Component {

      constructor(props) {

            super(props);
const userLoggedtoken = localStorage.getItem("userLoggedtoken")
            let loggedIn = true
if(userLoggedtoken===null){
loggedIn = false
}
            this.state = {
firstname:'',
lastname:'',
email:'',
resetPwd: '',

                  username: '',
                  success:0,
cnfmPassword:'',
loggedIn
            }
      }

      onChange = (event)=>{

            this.setState({
                  [event.target.name]: event.target.value
            })
      }

      onFormSubmit = (e) => {
            e.preventDefault()
            const {firstname,lastname,email,password,username,resetPwd} = this.state

const user = {firstname,lastname,email,password,username,resetPwd}

axios.post(' https://codeitoutserver.herokuapp.com/api/User/signup',user)
.then((res) => {
notify.show('OTP sent',"custom", 2000, customNotify)
this.setState({success:1})
console.log(res)
})
.catch(err =>{

const res = err.response.data
alert(res)
console.log(err)
});

      }
      render() {
if(this.state.success===1){
return(
<div>
      <Notifications/>

      <Redirect to='/verify'/>


</div>
)
}

            return (<div className="signup">

<Notifications/>
      <div className="outer">
      <div className="inner">
<h3>Sign Up</h3>
            <form  onSubmit= {this.onFormSubmit}>
<div className="form-group">
      <input required type="text" name="firstname" className="form-control " value={this.state.firstname} onChange={this.onChange} placeholder="First Name" />

</div>
<div  className="form-group">
      <input required type="text" name="lastname" className="form-control " value={this.state.lastname} onChange={this.onChange} placeholder="Last Name"/>

</div>
<div  className="form-group">
      <input required type="text" name="username" className="form-control " value={this.state.username} onChange={this.onChange} placeholder="Username"/>

</div>
<div className="form-group">
      <input required type="email" name="email" className="form-control " value={this.state.email} onChange={this.onChange} placeholder="E-mail "/>

</div>
<div   className="form-group">
      <input required type="password" name="password" className="form-control " value={this.state.password} onChange={this.onChange} placeholder="Password"/>

</div>
<div   className="form-group">
      <input required type="password" name="resetPwd" className="form-control " value={this.state.resetPwd} onChange={this.onChange} placeholder="Confirm Password"/>

</div>

                  <button className="btn btn-lg btn-dark btn-block" type="submit" name="signup">Sign Up</button>

            </form>

            </div>
</div>
</div>

)
      }
}

export default SignUp;
