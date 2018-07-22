import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import '../assets/styles/signup.scss'
import Axios from 'axios';

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("submitted!");
    const { email, password, phone } = this.state;

    try {
      const res = await Axios.post('/signup',{
        email, password, phone
      })
      console.log(res)
      this.props.setUser(res.data);
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
          onChange={this.handleChange}
          />
          <label for="password">Password:</label>
          <InputField 
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={this.handleChange}
          />
          <label for="phone">Phone:</label>
          <InputField 
          type="tel"
          name="phone"
          id="phone"
          placeholder="phone"
          onChange={this.handleChange}
          />
          <Button type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}