import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import  {notify} from 'react-notify-toast';

let customNotify = {
background:"#000",
text:"#fff"
}
class Logout extends React.Component{

      constructor(props){
      super(props);
this.state = {
refreshToken:localStorage.getItem("userRefreshToken"),
loggedIn:''
}
// localStorage.removeItem("userRefreshToken");

      }

componentDidMount(){
const refreshToken  = this.state.refreshToken
console.log(refreshToken)
//
// axios.put('http://localhost:4000/api/User/login-success', {
//       headers: {
//             Authorization: `Bearer ${localStorage.getItem("userLoggedToken")}`
//       }
//
// }).then((res) => {
// console.log(res.data)
//       this.setState({loggedIn: res.data})
//       console.log(res.data)
//       // console.log(this.state.userDetail)
//
// }).catch((err) => {
// this.setState({loggedIn:false})
//       console.log(err)
//
// })
axios.delete(' https://codeitoutserver.herokuapp.com/api/user/logout-refreshToken', {refreshToken}).then(res => {

      localStorage.removeItem("userLoggedToken");

      localStorage.removeItem("userRefreshToken");

notify.show("Logged Out Successfully","custom",2000,customNotify)
})
.catch(err=> {
console.log(err)
})



}
render(){

return(
<div>
<h1>

      This is Logout

</h1>

<Link to="/SignIn"> <button className="btn login-page-btn btn-lg btn-primary btn-block" type="submit" name="signin">Login Page</button>
 </Link>
</div>
)
}
}

export default Logout;
