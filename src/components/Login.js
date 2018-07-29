import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import '../assets/styles/signup.scss'
import Error from '../components/fields/Error'
import axios from 'axios';
import { setToken } from "../services/tokenService";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };

  handleChange = e => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value }
    );
  };

  handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("submitted!");
      try {
        const res = await axios.post('/login',{
          email:this.state.email, password:this.state.password
        })
        if(res.data.token){
          setToken(res.data.token);
          this.props.getCurrentUser();
        }
        else {
          this.setState({errorMessage: "Your Username/Password is Incorrect"})
        }
      } catch(e){
        console.error(e);
      }
  }

  render(){
    return(
      <div className="signup-form-wrapper">
        <div className="signup-link-wrapper">
          <h1>Netflix-Fav</h1>
          <Link to="/signup"><Button className="signup-btn" value="SignUp"/></Link>
        </div>
        <Divider className="divider-styles"/>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email:</label>
          <InputField 
          type="email"
          name="email"
          id="email"
          placeholder="admin@netflix-fav.com"
          handleChange={this.handleChange}
          className="input-field"
          />
          <label for="password">Password:</label>
          <InputField 
          type="password"
          name="password"
          id="password"
          placeholder="****"
          handleChange={this.handleChange}
          className="input-field"
          />
          <Button className="submit-btn" type="submit" value="Submit"/>
        </form>
        {this.state.errorMessage?<Error message={this.state.errorMessage} />:''}
      </div>
    )
  }
}