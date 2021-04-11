import React from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader.js';
import {Link} from 'react-router-dom';
import './Profile.css';
class Profile extends React.Component {

      state = {

            userDetail: [],
            quesol: []
      }

      componentDidMount() {

            const token = localStorage.getItem("userRefreshToken")
            axios.post('http://localhost:4000/api/user/token', {token}).then(res => {

                  axios.get('http://localhost:4000/api/User/profile', {
                        headers: {
                              Authorization: `Bearer ${res.data.accessToken}`
                        }

                  }).then((res) => {
                        this.setState({userDetail: res.data, quesol: res.data[0].queset})
                        console.log(res.data[0].queset)
                        console.log(this.state.quesol)

                        if (res.data > 0) {
                              this.setState({loaded: true})
                        } else {
                              this.setState({loaded: true})
                        }
                        window.scrollTo(0, 0);

                  }).catch((err) => {
                        this.setState({loaded: true})

                  })

            }).catch(err => console.log(err))

      }
      render() {

            const prof = this.state.userDetail.map((detail) => {
                  return (
<div className="profile">
<div className="profile-div row">
                        <div className=" col-lg-4">
                              <h4 className="prof-name">Name :</h4>
                        </div>
                        <div className="prof-name col-lg-5">
                              <h4 className="prof-name"> {detail.firstname}
                                    <span> </span>
                                    {detail.lastname}</h4>
                        </div>

                  </div>

<div className="profile-div row">
                        <div className="prof-username col-lg-4">
                              <h4 className="prof-username">Username :</h4>
                        </div>
                        <div className="prof-username col-lg-5">
                              <h4 className="prof-username">{detail.username}</h4>
                        </div>
                  </div>

<div className="profile-div row">
                        <div className="prof-solved col-lg-4">
                              <h4 className="prof-solved">Solved:      </h4>

                        </div>
                        <div className="prof-solved col-lg-7">
                              <h5>{

                                          this.state.quesol.map(que => {
                                                return (
<button className="quesol-btn btn-sm">
<Link to={`/questionlist/${que.link}`}>
                                                      <span className="quesol-name">
                                                            {que.name}
                                                      </span>
                                                </Link>
                                                </button>

)
                                          })
                                    }
                              </h5>

                        </div>
                  </div>
</div>

)
            })
            if (this.state.loaded) {

                  return (<div className="profile-div">
                        <div className="outer-prof">
                              <div className="inner-prof">
                                    <h1 className="prof-heading">
                                          Profile
                                    </h1>
                                    {prof}
                              </div>
                        </div>

                  </div>)

            } else {
                  if (!this.state.loaded) {
                        return (<div className="loader"><Loader message="Loading"/></div>)
                  }
            }

      }
}

export default Profile;
