import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import Button from '../components/fields/Button'
import '../assets/styles/signup.scss'
import Error from '../components/fields/Error'
import axios from 'axios';

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    phone: "",
    errorMessage: ""
  };

  handleChange = e => {
    console.log(e.target.value, e.target.name);
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
      console.log(res)
      this.props.setUser(res.data);
    } catch(e){
      console.log(e);
      this.setState({errorMessage: "User Already Exist, Please Select Login"})
      console.log(this.state.errorMessage)
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
      </div>
    )
  }
}