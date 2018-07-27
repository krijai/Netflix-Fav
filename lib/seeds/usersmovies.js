const UsersMovies = require('../models/UsersMovies')

const users_movies = []

const users_movie = new UsersMovies({
  _movie_id: '5b58b85a5f65e54cb6153b06',
  user_ids: ['5b57ddfea7922f08b7cdaa7e','5b57e346ea80b60e08ae67c4']
})

// movie.comments.push(comment)
users_movies.push(users_movie)

const users_movie_2 = new UsersMovies({
  _movie_id: '5b58b85a5f65e54cb6153b07',
  user_ids: ['5b57ddfea7922f08b7cdaa7e']
})

// movie.comments.push(comment)
users_movies.push(users_movie_2)

module.exports = users_movies