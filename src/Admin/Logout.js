import React from 'react';
import {Link} from 'react-router-dom';

class Logout extends React.Component{

      constructor(props){
      super(props);
localStorage.removeItem("token");
      }
render(){


return(
<div>

This is Logout;

<Link to="/admin/login"> <button className="btn login-page-btn btn-lg btn-primary btn-block" type="submit" name="signin">Login Page</button>
 </Link>
</div>
)
}
}

export default Logout;
