const express = require('express')
const Router = express.Router
const router = Router()
const UsersMovies = require('../models/UsersMovies')

const { UpdateFavMovie, getAllFav, RemoveFavMovie } = require('../middleware/fav')

const { getAllMovies } = require('../middleware/movies')


router.get('/', getAllMovies , (req, res, next) => {
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

router.get('/fav/:id', getAllFav , (req, res, next) => {
  if (req.fav) {
    res.status(200).send(req.fav)
  } else {
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

module.exports = router