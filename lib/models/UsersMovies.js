const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userMovieSchema = new Schema({
  _movie_id: Schema.Types.ObjectId,
  user_ids: [String]
})

module.exports = mongoose.model('UsersMovies', userMovieSchema)