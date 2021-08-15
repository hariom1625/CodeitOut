import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";

const token1 = localStorage.getItem("userRefreshToken");
axios
  .post(
    `${process.env.REACT_APP_SERVER}/api/user/token`,
    { token1 },
    {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}`,
      },
    }
  )
  .then((res) => {
    localStorage.setItem("userLoggedToken", res.data.accessToken);
  })
  .catch((err) => {});
const token2 = localStorage.getItem("art");

axios
  .post(
    `${process.env.REACT_APP_SERVER}/api/admin/token`,
    { token2 },
    {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_TC_TOKEN}`,
      },
    }
  )
  .then((res) => {
    localStorage.setItem("alt", res.data.accessToken);
  })
  .catch((err) => {});

ReactDOM.render(<App />, document.getElementById("root"));
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
