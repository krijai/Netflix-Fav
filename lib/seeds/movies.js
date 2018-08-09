const Movies = require('../models/Movies')
var fs = require('fs');
const path = require("path");

const movies = []

const movie = new Movies({
  title: 'Deadpool',
  genres:'Action',
  release_date: new Date(),
  description: 'Deadpool is a feverishly eager-to-please comic-book movie about a super-villain who suits up like a superhero.' ,
  image: "https://i.imgur.com/cvial2v.jpg",
  video: 'ONHBaC-pfsk',
  users_ratings_comments: [
    {user_id: '5b57ddfea7922f08b7cdaa7e',
    rating: 4.5,
    comments: "Cool Movie"
    },
    {user_id: '5b57e346ea80b60e08ae67c4',
    rating: 3.5,
    comments: "Amazing Movie"
    }
  ]
})

// movie.comments.push(comment)
movies.push(movie)

const movie2 = new Movies({
  title: 'Deadpool2',
  genres:'Action',
  release_date: new Date(),
  description: 'Funnier, filthier, and damn entertaining, Deadpool 2 leaves no stone un-deconstructed: the naughty man-child of the X-Men universe who manages to beat them at their own game.' ,
  image: 'https://i.imgur.com/MpuqIFt.jpg',
  video: 'D86RtevtfrA',
  users_ratings_comments: [
    {user_id: '5b57ddfea7922f08b7cdaa7e',
    rating: 5,
    comments: "Best Movie"
    }
  ]
})

// movie.comments.push(comment)
movies.push(movie2)

const movie3 = new Movies({
  title: 'Death Note',
  genres:'Adventure',
  release_date: new Date(),
  description: 'A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone whose name is written within its pages, and launches a secret crusade to rid the world of criminals.' ,
  image: 'https://i.imgur.com/YYLpe0v.jpg',
  video: 'gvxNaSIB_WI'
})

// movie.comments.push(comment)
movies.push(movie3)

const movie4 = new Movies({
  title: 'Okja',
  genres:'Action',
  release_date: new Date(),
  description: 'A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.' ,
  image: 'https://i.imgur.com/2ZUJTdx.jpg'
})

// movie.comments.push(comment)
movies.push(movie4)

const movie5 = new Movies({
  title: 'Bright',
  genres:'Action',
  release_date: new Date(),
  description: 'Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.' ,
  image: 'https://i.imgur.com/T5ZlU63.jpg'
})

// movie.comments.push(comment)
movies.push(movie5)

module.exports = movies