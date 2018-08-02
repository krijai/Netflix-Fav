const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fs = require('fs')

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genres: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  users_ratings_comments: [{
    user_id: String,
    rating: {
      type: Number,
      default: 0
    },
    comments: {
      type: String,
      default: null
    }
  }]
})

module.exports = mongoose.model('Movies', moviesSchema)