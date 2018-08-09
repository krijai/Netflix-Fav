const express = require('express')
const Router = express.Router
const router = Router()
const UsersMovies = require('../models/UsersMovies')

const { UpdateFavMovie, getAllFav, RemoveFavMovie } = require('../middleware/fav')

const { getAllMovies } = require('../middleware/movies')

const { UpdateMovieRating } = require('../middleware/rating')

const { UpdateMovieComments, RemoveMovieComments } = require('../middleware/comments')


router.get('/:id', getAllMovies , (req, res, next) => {
  if (req.movies) {
    res.status(200).send(req.movies)
  } else {
    next(new Error('not found'))
  }
})

router.post('/fav', UpdateFavMovie, (req, res, next) => {
  if (req.fav_movie) {
    res.status(200).send(req.fav_movie)
  } else {
    next(new Error('not found'))
  }
})

router.post('/rating', UpdateMovieRating, (req, res, next) => {
  if (req.rating) {
    res.status(200).send(req.rating)
  } else {
    next(new Error('not found'))
  }
})

router.post('/comments', UpdateMovieComments, (req, res, next) => {

  console.log('req.comments',req.comments)
  if (req.comments) {
    res.status(200).send(req.comments)
  } else {
    next(new Error('not found'))
  }
})

router.get('/fav/:id', getAllFav , (req, res, next) => {
  if (req.fav) {
    res.status(200).send(req.fav)
  } else {
    console.log("/fav/:id error")
    next(new Error('not found'))
  }
})

router.delete('/fav', RemoveFavMovie, (req, res, next) => {
  if (req.fav_movie) {
    res.status(200).send(req.fav_movie)
  } else {
    next(new Error('not found'))
  }
})

router.delete('/comments', RemoveMovieComments, (req, res, next) => {
  if (req.comments) {
    res.status(200).send(req.comments)
  } else {
    next(new Error('not found'))
  }
})

module.exports = router