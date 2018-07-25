import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import { getToken } from './services/tokenService';
import './App.scss';

class App extends Component {

  state = {
    user: null,
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = async () => {
    const token = getToken();
    if(token) {
      try {
        const res = await axios.get('/user/current', {
          headers: {
            Authorization: `Bearer ${token}`
          }
          });
          const user = res.data;
          this.setUser({user});
      } catch(e) {
        console.error(e);
      }
    }
  };

  setUser = user => {
    this.setState({user});
  };


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/signup" render={()=>
            this.state.user?
            <Redirect to="/" />:
            <Signup setUser={this.setUser}/>
            }/>
            <Route exact path="/login" render={()=>
            this.state.user?
            <Redirect to="/" /> :
            <Login getCurrentUser={this.getCurrentUser}/>} />
            <Route exact path="/" render={()=>
            this.state.user?
            <Dashboard user={this.state.user} setUser={this.setUser}/>:
            <Redirect to="/login" />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
