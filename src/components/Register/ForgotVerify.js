import React from 'react';
import './SignUp.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom';

import Notifications, {notify} from 'react-notify-toast';

let customNotify = {
background:"#000",
text:"#fff"

}
class ForgotVerify extends React.Component {

      constructor(props) {
            super(props)
            this.state = {
                  otp: '',
                  success: -1
            }
      }

      onChange = (event) => {

            this.setState({
                  [event.target.name]: event.target.value
            })
      }

      onFormSubmit = (e) => {
            e.preventDefault()
            const {otp} = this.state

            const sendOtp = {
                  otp
            }

            axios.put('http://localhost:4000/api/User/forgotPwdVerify', sendOtp).then((res) => {
                  notify.show(res.data,"custom", 2000, customNotify)
                  this.setState({success: 1})
            }).catch(err => {

                  const res = err.response.data
                  this.setState({success: 0})
                  console.log(this.state.success)
                  alert(res)
                  console.log(res)
            });
      }
      render() {
            console.log(this.state.success)

            if (this.state.success === 1) {
                  return (<Redirect to='/success'/>)
            } else if (this.state.success === 0) {
                  return (<Redirect to='/failure'/>)
            }
            return (<div className="otp">
                  <Notifications/>
                        <div className="outer">
                        <div className="inner">
                  <form onSubmit={this.onFormSubmit}>
                        <h4 className="otp-head">Verify Your Account</h4>
                              <div className="form-group">

                                    <input required="required" type="text" name="otp" className="form-control" value={this.state.otp} onChange={this.onChange} placeholder="Enter OTP"/>
                              </div>


                        <button className="btn btn-lg btn-dark btn-block" type="submit" name="signup">Sign Up</button>

                  </form>
            </div>
</div>
</div>


)
      }
}

export default ForgotVerify;
