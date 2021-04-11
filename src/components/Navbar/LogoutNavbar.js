import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function refreshPage ()  {
setTimeout( () => {
window.location.reload(false)
},500);
console.log("Reload")
}


class LogoutNavbar extends Component {

    constructor(props) {

        super(props);

        this.state = { active:'Home'};
        this.changed = this.changed.bind(this);

    }


    changed(){
        const ext = document.URL;
        //console.log(ext);
        //const conti = ext.includes("00/");
        if(ext.length > 22)
        {
            const n = ext.lastIndexOf("/");
            const exten = ext.substring(n+1);
            //console.log(exten);
            if(exten === 'questionlist'){
                this.setState({active:'Questions List'});}
            if(exten === 'resources'){
                this.setState({active:'Resources'});}
                if(exten === 'Profile'){
                  this.setState({active:'Profile'});}
        }
        else{
            this.setState({active:'Home'});
        }

        //console.log(this.state.active);
    }
    refreshPage ()  {
   setTimeout( () => {
   window.location.reload(false)
   },200);
   console.log("Reload")
   }

    render(){



        return (
<div>
            <nav className="navbar navbar-expand-md fixed-right navbar-light bgrnd py-3"  id="scrollup">
                  <a className="navbar-brand"  href="/">CodeitOut</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center">
                        <Link to ="/" id="navLink">
                        <hr className="d-md-none"></hr><li className={(this.state.active==='Home')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() =>{ this.changed();
                            window.location.href="/";}}>Home</li>
                        </Link>

                        <Link to="/questionlist" id="navLink">
                        <hr className="d-md-none"></hr> <li className={(this.state.active==='Questions List')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() =>{ this.changed();
                            window.location.href="/questionlist";}}>Questions List</li>
                        </Link>

                        <Link to ="/resources" id="navLink">
                        <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
                            window.location.href="/resources";}}>Resources</li>
                        </Link>

                        <Link to ="/Profile" target="_blank" rel="noopener noreferrer" id="navLink">
                        <hr className="d-md-none"></hr> <li className={(this.state.active==='Resources')?"nav-item mx-3 px-3 active":"nav-item mx-3 px-3"} onClick={() => { this.changed();
                         this.refreshPage();   window.location.href="/Profile";}}>Profile</li>
                        </Link>

                    </ul>
                </div>
                <Link to="/SignOut" >
                            <button  onClick={refreshPage} className="btn signin-nav btn-lg btn-dark btn-block" type="submit" name="SignOut"> Sign Out</button>
                </Link>
            </nav>
</div>

       );
        }
}

export default LogoutNavbar;
