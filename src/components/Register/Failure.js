import React from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

class OtpVerify extends React.Component{

render(){

return(

<div>
<h1 className="otp"> INVALID OTP </h1>


    <Link to="/SignUp">
          <button className="btn otp-btn signin-nav btn-lg btn-dark btn-block" type="submit" name="SignUp"> Sign Up </button>
    </Link>
</div>
)
}
}

export default OtpVerify
