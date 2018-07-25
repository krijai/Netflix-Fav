import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import MenuAppBar from './fields/AppBar'
import '../assets/styles/appbar.scss'

export default class Dashboard extends Component {
  render(){
    return(
      <div>
        <MenuAppBar user={this.props.user} setUser={this.props.setUser}/>
      </div>
    )
  }
}