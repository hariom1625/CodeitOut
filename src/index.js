import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";

const token1 = localStorage.getItem("userRefreshToken");
if (token1) {
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
}

const token2 = localStorage.getItem("art");
if (token2) {
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
}

ReactDOM.render(<App />, document.getElementById("root"));
