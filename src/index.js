import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

const token = localStorage.getItem("userRefreshToken")
axios.post(' https://codeitoutserver.herokuapp.com/api/user/token', {token}).then(res=>{

localStorage.setItem("userLoggedToken",res.data.accessToken)
}).catch(err=> console.log(err))


ReactDOM.render(


    <App />,
  document.getElementById('root')


);
// const checkAuth = () =>{
//
//       const userLoggedToken = localStorage.getItem("userLoggedToken")
//       const userRefreshToken = localStorage.getItem("userRefreshToken")
// if(!userLoggedToken || !userRefreshToken)
// return false;
//
// try {
// const {exp} = decode(userLoggedToken);
// console.log(exp,'decode');
// }
// catch(e){
// console.log(e,'decode')
// }
// }
