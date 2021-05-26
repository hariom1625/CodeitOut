import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';


class OtpVerify extends React.Component{

render(){

return(

<div>
<h1 className="otp">OTP VERIFIED </h1>
      <Link to="/SignIn">
                  <button className="btn otp-btn signin-nav btn-lg btn-dark btn-block" type="submit" name="SignIn"> Sign In </button>
    </Link>

</div>
)
}
}

export default OtpVerify;
