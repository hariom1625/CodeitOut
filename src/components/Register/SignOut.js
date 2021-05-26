// import React from 'react';
// import {Link,Redirect} from 'react-router-dom';
// import axios from 'axios';
// import './SignUp.css';
//
// import  {notify} from 'react-notify-toast';
//
// let customNotify = {
// background:"#000",
// text:"#fff"
// }
// let loggedIn = true
//
// class SignOut extends React.Component{
//
//       constructor(props){
//       super(props);
//       const userLoggedtoken = localStorage.getItem("userLoggedToken")
//       if(userLoggedtoken===null){
//       loggedIn = false
//       }
// this.state = {
// refreshToken:localStorage.getItem("userRefreshToken"),
// loggedIn:''
// }
//
//       }
// //
// // componentDidMount(){
// // const refreshToken  = this.state.refreshToken
// //
// // axios.delete('https://codeitoutserver.herokuapp.com/api/user/logout-refreshToken', {refreshToken}).then(res => {
// //
// //       localStorage.removeItem("userLoggedToken");
// //
// //       localStorage.removeItem("userRefreshToken");
// // notify.show("Logged Out Successfully","custom",2000,customNotify)
// // })
// // .catch(err=> {
// // console.log(err)
// // })
// //
// //
// //
// // }
// render(){
//       if (loggedIn===true) {
// console.log("hey")
// return(
//       <Redirect to="/profile"/>
// )
//       }
// else{
// return(
// <div>
// <h1>
//
//       This is Logout
//
// </h1>
//
// <Link to="/SignIn"> <button className="btn logout-page-btn btn-lg btn-dark btn-block" type="submit" name="signin">Login Page</button>
//  </Link>
// </div>
// )
// }
// }
// }
//
// export default SignOut;
