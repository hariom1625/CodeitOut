import React from 'react';
import './Home.css';
import Compiler from '../Compiler/Compiler.js';
import ParticlesBg from 'particles-bg';

class Home extends React.Component {
      state = {
name:''
      }

      componentDidMount() {
            window.scrollTo(0, 0);

      }

      render() {


            const config = {
                  position: {
                        width: 100,
                        height: 30
                  }
            };

            return (

<div className="container-fluid">
                        <ParticlesBg type="polygon" config={config} bg={true}/>


                  <h2 className="home-heading-1">
                        <i className="fas code-home fa-code"></i>Code</h2>
                  <h2 className="home-heading-2">
                        <i className="fas  code-home fa-cogs"></i>
                        Run</h2>

                  <h1 className="home-heading-3">
                        Compile
                  </h1>

                  <h3 className="home-heading-4">
                        "If you lie to the compiler, it will have its revenge."
                        <br/>
                        <br/>
                        <span className="quote-name">— Henry Spencer.</span>
                  </h3>



<h1>
{this.state.name}
</h1>
<div className="container ">
<Compiler/>
</div>



            </div>);
      }
}

export default Home;
// <button className="btn signin-btn btn-lg btn-primary btn-block" onClick={this.onGoogleClick} type="submit" name="Google">Google</button>

// <ul>
// {this.state.users.map(user =>
//
// <li key = {user.id}>
// {user.username}
// </li>
// )}</ul>

// {users.map((user) => (
//       <li>{user.username}</li>
// ))}
// <GoogleLogin clientId="559451512774-4f09csf9c5df86ppde41vls96h8j39pp.apps.googleusercontent.com"
// buttonText="Login" onSuccess={this.responseGoogle} isSignedIn={true} onFailure={this.responseGoogle} cookiePolicy={'single_host_origin'}/>
// <GoogleLogout
//    clientId="559451512774-4f09csf9c5df86ppde41vls96h8j39pp.apps.googleusercontent.com"
//    buttonText="Logout"
//    onLogoutSuccess={logout}
// >
//   </GoogleLogout>
