import React, { Component } from 'react'
import InputField from '../components/fields/InputField'
import MenuAppBar from './fields/AppBar'
import MovieGridList from './fields/GridList'
import MovieDetails from './fields/MovieDetails'
import MainTabs from './fields/Tabs'
import FavList from './fields/FavList'
import IconDelete from './fields/Icon'
import RateField from './antd-fields/RateField'
import BackTopField from './antd-fields/BackTopField'
import ModalField from './antd-fields/ModalField'
import SearchField from './fields/SearchField'
import axios from 'axios';

import '../assets/styles/appbar.scss'
import '../assets/styles/dashboard.scss'

export default class Dashboard extends Component {

  state = {
    open: false,
    myFav: null,
    search: null
  }

  handleOpen = (index,e) => {
    this.setState({ open: index });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addToFav = async (movie_id) => {
    if(this.props.user) {
      const user_id = this.props.user.user._id.toString();
      const fav = await axios.post('/movies/fav', {
        movie_id, user_id:user_id
      });
      this.props.setFavUpdate(fav);
    } else {
      alert("Login in use this feature")
    }
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

  updateRating = async (movie_id, user_id, rating) => {

    const rate = await axios.post('/movies/rating', {
      movie_id, user_id, rating
    })

    if(rate) {
      this.props.getMoviesList()
    }
  }

  updateComments = async (movie_id, user_id, comments) => {

    const comment = await axios.post('/movies/comments', {
      movie_id, user_id, comments
    })

    if(comment) {
      this.props.getMoviesList()
    }
  }

  removeComments = async (movie_id, user_id) => {
    console.log('removeComments',movie_id,user_id)
    const comment = await axios.delete('/movies/comments', {
    data:
        {
          movie_id, user_id
        }
    })

    if(comment) {
      this.props.getMoviesList()
    }
  }

  searchHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }
    );
  }

  render(){
    var list = 
    <div className="gridlist-container">
      {this.props.movies.map((list, key) => {
        
        const isFavourited = this.props.fav.filter(favourite => list._id === favourite._movie_id).length > 0

        if (this.state.search) {
          var search_string = this.state.search
          search_string = search_string+""
          search_string = search_string.toLowerCase().trim()
          if(search_string === "") {
            search_string = null
          }
          var isSearch = (list.title).toString().toLowerCase().trim().indexOf(search_string) !== -1
        } else {
          var isSearch = true
        }


        if(isSearch) {
          return(
            <div className="gridlist-content-wrapper">
              <MovieGridList list={list} key={key} isFavourited={isFavourited} fav={this.props.fav} handleOpen={this.handleOpen.bind(this, key)} handleClose = {this.handleClose.bind(this)} addToFav={this.addToFav.bind(this)} removeFromFav={this.removeFromFav.bind(this)}/>
              <RateField list={list} onChange= {(e)=>{
                console.log(e.target) }
              } updateRating={this.updateRating.bind(this)} user={this.props.user} className="rating-field"/>
  
              <ModalField list={list} className="watch-trailer-button"/>
  
              <MovieDetails list={list} user={this.props.user} updateComments={this.updateComments.bind(this)} removeComments={this.removeComments.bind(this)} open={this.state.open === key} handleOpen={this.handleOpen.bind(this)} handleClose = {this.handleClose.bind(this)}/>
            </div> 
          )
        } else {
          return(null)
        }

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
        <MenuAppBar user={this.props.user} setUser={this.props.setUser} />
        <SearchField className="search-bar" searchHandleChange={this.searchHandleChange} name="search"/>
        <MainTabs list={list} myFav={myFav}/>
        <BackTopField />
      </div>
    )
  }
}