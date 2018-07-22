import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import './App.scss';

class App extends Component {

  state = {
    user: null,
  };

  setUser = user => {
    this.setState({user});
  };

  render() {
    return (
      <div className="App">
        <h1>NetFlix-Fav</h1>
        <Router>
          <Switch>
            <Route exact path="/signup" render={()=>
            this.state.user?
            <Redirect to="/" />:
            <Signup setUser={this.setUser}/>
            }/>
            <Route exact path="/" render={()=>
            this.state.user?
            <Dashboard />:
            <Dashboard />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
