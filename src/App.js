import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import FourOFour from './components/FourOFour'
import { getToken } from './services/tokenService';
import './App.scss';

class App extends Component {

  state = {
    user: null,
    movies: {
      movies: [],
    },
    fav: {
      favorite: [],
    },
    favUpdate:null
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

  getMoviesList = async () => {
    console.log("rating call hit")
    const user = this.state.user;
    var user_id = user.user._id
    user_id = user_id.toString();
    const mov = await axios.get(`/movies/:${user_id}`,async (req,res,next) => {
      return res.data
    });
    const movies = mov.data;
    this.setMovies({movies});
  }

  getFavList = async () => {
    const user = this.state.user;
    const user_id = (user.user._id).toString()
    const fav = await axios.get(`/movies/fav/:${user_id}`, async (req,res,next) => {
      return res.data
    });
    console.log("fav")
    console.log(fav)
    var fav_current_user = fav.data.filter( usr => 
      
      usr.user_ids.filter( user_id_filter =>{
        user_id_filter.user_id !== user_id 
      })
    
    );
    console.log("fav_current_user")
    console.log(fav_current_user)
    var fav_filtered = fav_current_user.filter((fav)=> {
      fav.user_id !== user_id
    })

    console.log(fav_filtered)
    const favorite = fav.data;
    this.setFav({favorite});
  }

  setFavUpdate = fav => {
    this.setState({
      favUpdate:fav
    },()=>{
      this.getFavList();
    })
  }

  setFav = fav => {
    this.setState({fav});
  };

  setMovies = movies => {
    this.setState({movies: movies});
  };

  setUser = user => {
    this.setState({user},()=>{
      if(user) {
        this.getMoviesList();
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
            <Dashboard user={this.state.user} setUser={this.setUser} movies={this.state.movies.movies} setFavUpdate={this.setFavUpdate} fav={this.state.fav.favorite} getMoviesList={this.getMoviesList}/>:
            <Redirect to="/login" />
            } />
            <Route exact path='*' render={()=>
            <FourOFour />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
