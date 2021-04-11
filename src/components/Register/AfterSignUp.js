import React from 'react';
import Loader from '../Loader/Loader.js';
import {Link} from 'react-router-dom'

class ASU extends React.Component {

      constructor(props) {
            super(props);
            const userLoggedToken = localStorage.getItem("userLoggedToken");

            let loggedIn = true
            if (userLoggedToken === null) {
                  loggedIn = false
            }

            this.state = {
                  userDetail: [],
                  accessToken: '',
                  loggedIn
            }
      }

      componentDidMount() {

      }
      render() {

            if (this.state.loaded && this.state.loggedIn===true) {

return(


                        <Link to="/SignOut">
                              <button className="btn logout-btn btn-lg btn-primary btn-block" type="submit" name="signin">Logout</button>
                        </Link>

)

            } else {

if(this.state.loaded && this.state.loggedIn===false){
return(
<div>
<h1>Session Expired</h1>
      <Link to="/SignIn">
            <button className="btn logout-btn btn-lg btn-primary btn-block" type="submit" name="signin">SignIn</button>
      </Link>

</div>
)
}
                  else if (!this.state.loaded) {

                        return (<div>

                              <div className="loader"><Loader message="Loading"/></div>

                        </div>)
                  }
            }
      }
}

export default ASU;
