import React from 'react';
import './SignUp.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom';

import Notifications, {notify} from 'react-notify-toast';

let customNotify = {
background:"#000",
text:"#fff"

}
class OtpVerify extends React.Component {

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
const id = localStorage.getItem("id");
            const sendOtp = {
                  otp,id
            }

            axios.post('https://codeitoutserver.herokuapp.com/api/User/verify', sendOtp,{

            headers:{
            authorization:`Bearer ${process.env.REACT_APP_TC_TOKEN}`
            }
            }).then((res) => {
                  notify.show(res.data,"custom", 2000, customNotify)
                  this.setState({success: 1})
localStorage.removeItem("id");
            }).catch(err => {

                  const res = err.response.data
                  this.setState({success: 0})
                  alert(res)
                  localStorage.removeItem("id");

            });
      }
      render() {

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


                        <button className="btn btn-lg btn-dark btn-block" type="submit" name="signup">Verify</button>

                  </form>
            </div>
</div>
</div>


)
      }
}

export default OtpVerify
