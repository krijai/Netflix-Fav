import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import { Link } from 'react-router-dom';
import '../assets/styles/signup.scss'
import Error from '../components/fields/Error'
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { setToken } from '../services/tokenService'


export default class Signup extends Component {


  state = {
    email: "",
    password: "",
    phone: "",
    signupErrorMessage: "",
  };


  handleChange = e => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value }
    );
  };

  handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('/signup',{
        email:this.state.email, password:this.state.password, phone:this.state.phone
      })
      if(res.data.message) {
        console.log("submitted!");
        setToken(res.data.token)
        this.props.setUser(res.data);
      } else {
        this.setState({signupErrorMessage: "User Already Exist, Please try to login "})
      }
    } catch(e){
      this.setState({signupErrorMessage: "Please Fill in all the information"})
    }
  }

  render(){
    return(
      <div className="signup-form-wrapper">
        <div className="signup-link-wrapper">
          <h1>Netflix-Fav</h1>
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
          <label for="phone">Phone:</label>
          <InputField 
          type="tel"
          name="phone"
          id="phone"
          placeholder="optional"
          handleChange={this.handleChange}
          className="input-field"
          />
          <Button className="submit-btn" type="submit" value="Submit"/>
        </form>
        <p className="login-text">Already Have an Account?</p>
        <Link to="/login">
        
        <Button className="submit-btn" value="Login"/>
        
        </Link>

        {this.state.signupErrorMessage?<Error signupMessage={this.state.signupErrorMessage} />:''}
      </div>
    )
  }
}