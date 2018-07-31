const Movies = require('../models/Movies')

const getAllMovies = async (req, res, next) => {
  console.log("getAllMovies hit");
  try {
    const doc = await Movies.find()
    if (!doc) {
      next(new Error('not found'))
    }
    req.movies = doc
    next()
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getAllMovies
}