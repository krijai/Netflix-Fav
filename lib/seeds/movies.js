const Movies = require('../models/Movies')
var fs = require('fs');
const path = require("path");
// const users = require('./users')

// var imageData = path.resolve(__dirname, "/assets/images/deadpool1-2.jpeg");
// console.log(imageData)
const movies = []

const movie = new Movies({
  title: 'Deadpool',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: "https://i.imgur.com/cvial2v.jpg"
})

// movie.comments.push(comment)
movies.push(movie)

const movie2 = new Movies({
  title: 'Deadpool2',
  genres:'Action',
  release_date: new Date(),
  description: 'Funnier, filthier, and damn entertaining, Deadpool 2 leaves no stone un-deconstructed: the naughty man-child of the X-Men universe who manages to beat them at their own game.' ,
  image: 'https://i.imgur.com/lQCtmYJ.jpg'
})

// movie.comments.push(comment)
movies.push(movie2)

module.exports = movies