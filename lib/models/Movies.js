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
  }
})

module.exports = mongoose.model('Movies', moviesSchema)