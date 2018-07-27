const Movies = require('../models/Movies')
const UsersMovies = require('../models/UsersMovies')
const movies = require('./movies')
const users_movies = require('./usersmovies')
const mongoose = require('mongoose')
const config = require('config')
const uri = process.env.MONGODB_URI || config.MONGODB_URI

const truncateDatabase = async () => {
  return Promise.all([Movies.deleteMany()],[UsersMovies.deleteMany()])
}

const makeSeeds = async () => {
  // wait for mongoose to connect to our db
  await mongoose.connect(uri)

  //delete all current content in our db
  await truncateDatabase()

  // save post seeds into database
  await Promise.all(movies.map(movie => movie.save()));

  // save post seeds into database
  await Promise.all(users_movies.map(users_movie => users_movie.save()));

  // close db connection
  mongoose.connection.close()
}

makeSeeds()