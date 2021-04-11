// import React, { Component } from 'react';
// import './Navbar.css';
// import axios from 'axios'
// import { Link, Redirect } from 'react-router-dom';
// let loggedIn = true
//
// class Navbar extends Component {
//
//     constructor(props) {
//
//         super(props);
//         const userLoggedtoken = localStorage.getItem("userLoggedToken")
//         if(userLoggedtoken===null){
//         loggedIn = false
//         }
//         this.state = { active:'Home',
// redirect:null,
// name:'',
// link:''};
//         this.changed = this.changed.bind(this);
//
//     }
//
//
//     componentDidMount()
//     {
//         this.changed();
//
//
// axios.get("http://localhost:4000/api/user/login-success").then(res=>{
//
// console.log(res.data)
// }).catch(err=>{
// console.log(err)
// })
//     }
//
//     changed(){
//         const ext = document.URL;
//         //console.log(ext);
//         //const conti = ext.includes("00/");
//         if(ext.length > 22)
//         {
//             const n = ext.lastIndexOf("/");
//             const exten = ext.substring(n+1);
//             //console.log(exten);
//             if(exten === 'questionlist'){
//                 this.setState({active:'Questions List'});}
//             if(exten === 'resources'){
//                 this.setState({active:'Resources'});}
//
//         }
//         else{
//             this.setState({active:'Home'});
//         }
//
//         //console.log(this.state.active);
//     }
//
//     render(){
//
// if(this.state.redirect){
//
// return <Redirect to={this.state.redirect} />
//
// }
//
//         return (
// <div>
//             <nav className="navbar navbar-expand-md fixed-right navbar-light bgrnd py-3"  id="scrollup">
//                   <a className="navbar-brand"  href="/">CodeitOut</a>
//
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon "></span>
//                 </button>
//
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ml-auto text-center">
//                         <Link to ="/" id="navLink">
//                         <hr className="d-md-none"></hr><li className={(this.state.active==='Home')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() =>{ this.changed();
//                             window.location.href="/";}}>Home</li>
//                         </Link>
//
//                         <Link to="/questionlist" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Questions List')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() =>{ this.changed();
//                             window.location.href="/questionlist";}}>Questions List</li>
//                         </Link>
//
//                         <Link to ="/resources" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
//                             window.location.href="/resources";}}>Resources</li>
//                         </Link>
//                         <Link to ="/SignIn" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
//                             window.location.href="/SignIn";}}>Sign In</li>
//                         </Link>
//                         <Link to="/SignUp" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
//                              window.location.href="/SignUp";}}>{this.state.loggedIn===true?"Sign Out" : "Sign Up"}</li>
//                         </Link>
//                         <Link to ="/ASU" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
//                             window.location.href="/ASU";}}>Profile</li>
//                         </Link>
//                         <Link to ="/signout" id="navLink">
//                         <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
//                             window.location.href="/signout";}}>Sign Out</li>
//                         </Link>
//                     </ul>
//                 </div>
//
//       <Link to={`/${this.state.link}`}>
//
//       <button className="btn signin-nav btn-lg btn-primary btn-block" type="submit" name="Google">
//       {this.props.name}
//       </button>
//       </Link>
//
//
//
//
//             </nav>
// </div>
//
//        );
//         }
// }
//
// export default Navbar;
