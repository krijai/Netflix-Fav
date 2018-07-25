import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import { Link } from 'react-router-dom';
import '../assets/styles/signup.scss'
import Error from '../components/fields/Error'
import axios from 'axios';
import { setToken } from '../services/tokenService'


export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    phone: "",
    errorMessage: "",
    // emailValidation: null
  };

  handleChange = e => {
    console.log(e.target.value, e.target.name);
    // if (e.target.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
    //   this.setState({
    //     emailValidation: 'Invalid email address'
    //   })
    // } else {
    //   this.setState({
    //     emailValidation: null
    //   })
    // }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("submitted!");
    const { email, password, phone } = this.state;

    try {
      const res = await axios.post('/signup',{
        email:this.state.email, password:this.state.password, phone:this.state.phone
      })
      if(res.data.message) {
        setToken(res.data.token)
        this.props.setUser(res.data);
      } else {
        this.setState({errorMessage: "User Already Exist, Please Select "})
      }
    } catch(e){
      console.log(e);
    }
  }
  render(){
    return(
      <div className="signup-form-wrapper">
        <h1>Signup Page</h1>
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
          <label for="phone">Phone:</label>
          <InputField 
          type="tel"
          name="phone"
          id="phone"
          placeholder="phone"
          handleChange={this.handleChange}
          />
          <Button type="submit" value="Submit"/>
        </form>
        {this.state.errorMessage?<Error message={this.state.errorMessage} />:''}
        {this.state.errorMessage?<Link to="/login">Login</Link>:''}
      </div>
    )
  }
}