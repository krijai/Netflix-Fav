import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import MenuAppBar from './fields/AppBar'
import MovieGridList from './fields/GridList'
import MovieDetails from './fields/MovieDetails'
import MainTabs from './fields/Tabs'
import FavList from './fields/FavList'
import IconDelete from './fields/Icon'
import axios from 'axios';

import '../assets/styles/appbar.scss'
import '../assets/styles/dashboard.scss'

export default class Dashboard extends Component {

  state = {
    open: false,
    myFav: null
  }

  handleOpen = (index) => {
    this.setState({ open: index });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addToFav = async (movie_id) => {
    const user_id = this.props.user.user._id.toString();
    const fav = await axios.post('/movies/fav', {
      movie_id, user_id:user_id
    });
    this.setFavUpdate(fav);
  }

  removeFromFav = async (movie_id) => {
    console.log('removeFromFav function called')
    const user_id = this.props.user.user._id.toString();
    console.log(user_id)
    console.log(movie_id)
    const fav = await axios.delete('/movies/fav', {data:
      {
        movie_id:movie_id, user_id:user_id
      }
    });
    console.log("delete request")
    console.log(fav)
    this.setFavUpdate(fav);
  }

  setFavUpdate = (fav) => {
    this.props.setFavUpdate(fav);
  }

  render(){
    var list = 
    <div className="gridlist-container">
      {this.props.movies.movies.map((list, key) => {
        return(
          <div className="gridlist-content-wrapper">
            <MovieGridList list={list} key={key} handleOpen={this.handleOpen.bind(this, key)} handleClose = {this.handleClose.bind(this)} addToFav={this.addToFav.bind(this)}/>
            <MovieDetails list={list} open={this.state.open === key} handleOpen={this.handleOpen.bind(this)} handleClose = {this.handleClose.bind(this)}/>
          </div>
        )
      })}
    </div>

    var myFav =
    <div>
      {
        this.props.fav ?
        this.props.fav.favorite.map((fav, key) => {
        console.log("this.props.fav");
        console.log(fav);

      return (
        this.props.movies.movies.map((movie) => {
          console.log("fav movie before hit")
          console.log(movie._id)
          console.log(fav._movie_id)
          if(movie._id == fav._movie_id) {
            console.log("fav movie compare hit")
            return (
              <FavList movie={movie} >
                <IconDelete movie={movie} removeFromFav={this.removeFromFav.bind(this)}/>
              </FavList>
            )
          }
        })
      )
      }) : 
      ''
      }
    </div>


    return(
      <div>
        <MenuAppBar user={this.props.user} setUser={this.props.setUser}/>
        <MainTabs list={list} myFav={myFav}/>
      </div>
    )
  }
}