import React, {Component} from 'react';
//import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
class App extends Component{
  render(){
    return(
      <div>
        <Navigation /> 
      
      <form class="login-form">
      <h2 className = "text-center"> Welcome</h2>
      <FormGroup>
      <div >
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
           <small id="emailHelp" class="form-text text-muted">Example: Phakasos@gmail.com</small>
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
       <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  </FormGroup>
  <button type="submit" class="btn-lg btn-primary btn-block">log in</button>
   <div className="text-center">
   <a href="/sign-up">Sign up</a>
   <span className="p-2">|</span>
   <a href="/forgot-password">Forgot Password</a>
   </div> 
  
</form>
</div>
    );
  }
}


export default App;