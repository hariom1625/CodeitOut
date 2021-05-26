import React from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
class App extends React.Component {
      constructor(props) {

            super(props);
            const token = localStorage.getItem("userLoggedToken")
            let loggedIn = true
            if (token === null) {
                  loggedIn = false
            }

            this.state = {
                  login: false,
                  loggedIn
            }

      }

      render() {

            if (this.state.loggedIn) {
                  return <LoggedIn/>

            } else {
                  return <LoggedOut/>

            }
      }
}

export default App;
// <Route  path={`/Q${x}`} component={ScrollToTop(Q1)}/>
// <GoogleLogin buttonText="Login" onSuccess={this.responseGoogle} onFailure={this.responseGoogle} cookiePolicy={'single_host_origin'}/>
// responseGoogle = (response) => {
//       console.log(response);
//       console.log(response.profileObj);
// }

//
// checkAuth = () =>{
// console.log("Inside checkAuth()")
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
//
//
//  AuthRoute = ({ component:Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props=>  (
//         this.checkAuth ? (
//          <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signin"
//             }}
//           />
//         )
//       )}
//     />
//   );
//
