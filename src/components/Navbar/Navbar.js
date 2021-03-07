import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
// import IEEElogo from './ieee-logo.png';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { active:'Home' };
        this.changed = this.changed.bind(this);

    }
    componentDidMount()
    {
        this.changed();
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

        }
        else{
            this.setState({active:'Home'});
        }
        //console.log(this.state.active);
    }
    render(){
        return (
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


                    </ul>
                </div>
            </nav>
       );
        }
}

export default Navbar;
