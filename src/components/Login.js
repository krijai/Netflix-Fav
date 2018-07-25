import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import '../assets/styles/signup.scss'
import Error from '../components/fields/Error'
import axios from 'axios';
import { setToken } from "../services/tokenService";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
    // emailValidation: null
  };

  handleChange = e => {
    console.log(e.target.value, e.target.name);
    // if(e.target.name == 'email') {
    //   if (e.target.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
    //     this.setState({
    //       emailValidation: 'Invalid email address'
    //     })
    //   } else {
    //     this.setState({
    //       emailValidation: null
    //     })
    //   }
    // }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("submitted!");
    const { email, password } = this.state;

    try {
      const res = await axios.post('/login',{
        email:this.state.email, password:this.state.password
      })
      if(res.data.token){
        setToken(res.data.token);
        this.props.getCurrentUser();
      }
      else {
        this.setState({errorMessage: "Your Username/Password is Incorrect, Note: We don't yet have Forget username/password feature, so try to remember your username/password, if not create a new gmail account and signup again. Thanks!"})
      }
    } catch(e){
      console.error(e);
    }
  }

  render(){
    return(
      <div className="signup-form-wrapper">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email:</label>
          <InputField 
          type="email"
          name="email"
          id="email"
          placeholder="email"
          handleChange={this.handleChange}
          />
          <label for="password">Password:</label>
          <InputField 
          type="password"
          name="password"
          id="password"
          placeholder="password"
          handleChange={this.handleChange}
          />
          <Button type="submit" value="Submit"/>
        </form>
        {this.state.errorMessage?<Error message={this.state.errorMessage} />:''}
      </div>
    )
  }
}