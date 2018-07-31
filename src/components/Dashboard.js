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

  handleOpen = (index,e) => {
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
    this.props.setFavUpdate(fav);
    console.log("this.state.myFav");
    console.log(this.state.myFav);
  }

  removeFromFav = async (movie_id) => {
    const user_id = this.props.user.user._id.toString();
    console.log("removeFromFav Function Hit Before")
    const fav = await axios.delete('/movies/fav', {data:
      {
        movie_id:movie_id, user_id:user_id
      }
    });
    this.props.setFavUpdate(fav);
  }

  render(){
    var list = 
    <div className="gridlist-container">
      {this.props.movies.map((list, key) => {
        
        const isFavourited = this.props.fav.filter(favourite => list._id === favourite._movie_id).length > 0
        console.log("isFavourited")
        console.log(isFavourited)
        return(
          <div className="gridlist-content-wrapper">
            <MovieGridList list={list} key={key} isFavourited={isFavourited} fav={this.props.fav} handleOpen={this.handleOpen.bind(this, key)} handleClose = {this.handleClose.bind(this)} addToFav={this.addToFav.bind(this)} removeFromFav={this.removeFromFav.bind(this)}/>
            <MovieDetails list={list} open={this.state.open === key} handleOpen={this.handleOpen.bind(this)} handleClose = {this.handleClose.bind(this)}/>
          </div>
        )
      })}
    </div>

    var myFav =
    <div>
      {
        this.props.fav ?
        this.props.fav.map((fav, key) => {

      return (
        this.props.movies.map((movie) => {
          if(movie._id == fav._movie_id) {
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