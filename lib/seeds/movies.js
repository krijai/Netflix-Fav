const Movies = require('../models/Movies')
var fs = require('fs');
const path = require("path");
// const users = require('./users')

var imageData = fs.readFileSync(path.resolve(__dirname, "../../src/assets/images/deadpool1-2.jpeg"));
const movies = []

const movie = new Movies({
  title: 'Deadpool',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: "/src/assets/images/deadpool1-2.jpeg"
})

// movie.comments.push(comment)
movies.push(movie)

const movie2 = new Movies({
  title: 'Deadpool2',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: '/deadpool2.jpeg'
})

// movie.comments.push(comment)
movies.push(movie2)

module.exports = movies