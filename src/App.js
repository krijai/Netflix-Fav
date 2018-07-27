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
    movies: null,
    fav:null,
    favUpdate:null
  };


  componentDidMount() {
    this.getCurrentUser();
  }

  componentWillMount() {
    this.getMoviesList();
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

  getMoviesList = async () => {
    const mov = await axios.get('/movies',async (req,res,next) => {
      return res.data
    });
    const movies = mov.data;
    this.setMovies({movies});
  }

  getFavList = async () => {
    const user = this.state.user;
    const user_id = (user.user._id).toString()
    console.log(user)
    console.log(this.state.user);
    const fav = await axios.get(`/movies/fav/:${user_id}`, async (req,res,next) => {
      return res.data
    });
    console.log("get req")
    console.log(fav)
    const favorite = fav.data;
    console.log(favorite)
    this.setFav({favorite});
  }

  setFavUpdate = fav => {
    this.setState({
      favUpdate:fav
    },()=>{
      this.getFavList();
      this.forceUpdate();
    })
  }

  setFav = fav => {
    console.log("fav hit before")
    console.log(fav)
    this.setState({fav});
    console.log("fav hit after")
    console.log(this.state.fav)
  };

  setMovies = movies => {
    this.setState({movies: movies});
  };

  setUser = user => {
    console.log("call setUser")
    console.log(user)
    this.setState({user},()=>{
      if(user) {
        this.getFavList();
      }
    });
  };


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/signup" render={()=>
            this.state.user?
            <Redirect to="/" />:
            <Signup setUser={this.setUser} />
            }/>
            <Route exact path="/login" render={()=>
            this.state.user?
            <Redirect to="/" /> :
            <Login getCurrentUser={this.getCurrentUser} />} />
            <Route exact path="/" render={()=>
            this.state.user ?
            <Dashboard user={this.state.user} setUser={this.setUser} movies={this.state.movies} setFavUpdate={this.setFavUpdate} fav={this.state.fav}/>:
            <Redirect to="/login" />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
