import React from "react";
import axios from "axios";
import Loader from "../Loader/Loader.js";
import { Link } from "react-router-dom";
import "./Profile.css";
class Profile extends React.Component {
  state = {
    userDetail: [],
    quesol: [],
  };

  componentDidMount() {
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
          axios
            .get(`${process.env.REACT_APP_SERVER}/api/User/profile`, {
              headers: {
                Authorization: `Bearer ${res.data.accessToken}`,
              },
            })
            .then((res) => {
              this.setState({
                userDetail: res.data,
                quesol: res.data[0].queset,
              });
              if (res.data > 0) {
                this.setState({ loaded: true });
              } else {
                this.setState({ loaded: true });
              }
              window.scrollTo(0, 0);
            })
            .catch((err) => {
              this.setState({ loaded: true });
            });
        })
        .catch((err) => {});
    }
  }
  render() {
    const prof = this.state.userDetail.map((detail, idx) => {
      return (
        <div key={idx}>
          <div className=" prof-cont container ">
            <div className="row">
              <div className="  col-5">
                <h4 className="prof-name">Name :</h4>
              </div>
              <div className="  col-7">
                <h4 className="prof-name">
                  {" "}
                  {detail.firstname}
                  <span> </span>
                  {detail.lastname}
                </h4>
              </div>
            </div>
          </div>
          <div className=" prof-cont container ">
            <div className="row">
              <div className="  col-5">
                <h4 className="prof-username">Username :</h4>
              </div>
              <div className="  col-7">
                <h4 className="prof-username">{detail.username}</h4>
              </div>
            </div>
          </div>

          <div className=" prof-cont container ">
            <div className="row">
              <div className="  col-5">
                <h4 className="prof-solved">Solved: </h4>
              </div>
              <div className="  col-7">
                <h5>
                  {this.state.quesol.map((que, idx) => {
                    return (
                      <button key={idx} className="quesol-btn btn-sm">
                        <Link to={`/questionlist/${que.link}`}>
                          <span className="quesol-name">{que.name}</span>
                        </Link>
                      </button>
                    );
                  })}
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
    if (this.state.loaded) {
      return (
        <div className="profile-div ">
          <div className="outer-prof">
            <div className="inner-prof">
              <h1 className="prof-heading">Profile</h1>
              {prof}
            </div>
          </div>
        </div>
      );
    } else {
      if (!this.state.loaded) {
        return (
          <div className="loader">
            <Loader message="Loading" />
          </div>
        );
      }
    }
  }
}

export default Profile;
