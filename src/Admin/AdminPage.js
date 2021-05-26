import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

class AdminPage extends React.Component {

constructor(props){
super(props);
const token = localStorage.getItem("token");

let loggedIn = true
if(token===null){
loggedIn = false
}

this.state = {
loggedIn,
id:0,
problemName:'',
problemCode:'',
problemDesc:'',
problemInputDesc:'',
problemOutputDesc:'',
input:'',
ans:'',
time:''


}

// this.onChange = this.onChange.bind(this)
// this.onFormSubmit = this.onFormSubmit.bind(this)
}



onChange = (event) =>{

this.setState({
[event.target.name] : event.target.value
})

}

onFormSubmit = (event) => {

event.preventDefault()

const {id,problemCode,problemName,problemDesc,problemInputDesc, problemOutputDesc, input, ans,time} = this.state

const que ={
id,problemCode,problemName,problemDesc,problemInputDesc, problemOutputDesc, input, ans,time
}
axios.post('http://localhost:4000/api/Question',que,{

headers:{
authorization:`Bearer ${process.env.REACT_APP_TC_TOKEN}`
}
})
.then(() => console.log("Question sent.....!!!!!"))
.catch(err =>{
console.log(err)
});
}
render(){

if(this.state.loggedIn===false){
return <Redirect to="/login"/>
}

return (
<div>

<h1>
This is Admin Page.
</h1>

<form onSubmit= {this.onFormSubmit}>
<label><span className="label-form">Enter Problem ID </span></label>
      <input type="number" name="id" className="form-control adminpage-input" value={this.state.id} onChange={this.onChange} placeholder="Enter Problem id" />
      <label><span className="label-form">Problem Code </span></label>
      <input type="text" name="problemCode" className="form-control adminpage-input" value={this.state.problemCode} onChange={this.onChange} placeholder="Problem Code "/>
      <label><span className="label-form">Problem Name </span></label>
      <input type="text" name="problemName" className="form-control adminpage-input" value={this.state.problemName} onChange={this.onChange} placeholder="Problem Name "/>
      <label><span className="label-form">Problem Description </span></label>
      <input type="text" name="problemDesc" className="form-control adminpage-input" value={this.state.problemDesc} onChange={this.onChange} placeholder="Problem Description "/>
      <label><span className="label-form">Problem Input Description </span></label>
      <input type="text" name="problemInputDesc" className="form-control adminpage-input" value={this.state.problemInputDesc} onChange={this.onChange} placeholder="Problem Input Description "/>
      <label><span className="label-form">Problem Output Description </span></label>
      <input type="text" name="problemOutputDesc" className="form-control adminpage-input" value={this.state.problemOutputDesc} onChange={this.onChange} placeholder="Problem Output Description "/>
      <label><span className="label-form">Input </span></label>
      <input type="text" name="input" className="form-control adminpage-input" value={this.state.input} onChange={this.onChange} placeholder="Input "/>
      <label><span className="label-form">Answer </span></label>
      <input type="text" name="ans" className="form-control adminpage-input" value={this.state.ans} onChange={this.onChange} placeholder="Answer "/>
      <label><span className="label-form">Time Limit </span></label>
      <input type="text" name="time" className="form-control adminpage-input" value={this.state.time} onChange={this.onChange} placeholder="Time "/>



      <button className="btn admin-btn btn-lg btn-primary btn-block" type="submit" name="signin">Submit</button>

</form>

<Link to="/logout"> <button className="btn logout-btn btn-lg btn-primary btn-block" type="submit" name="signin">Logout</button>
 </Link>
</div>
)
}
}


export default AdminPage;
