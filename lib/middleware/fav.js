const UsersMovies = require('../models/UsersMovies')

const UpdateFavMovie = async (req, res, next) => {
  const { movie_id, user_id } = req.body

  try {
    const available_movie = await UsersMovies.findOneAndUpdate({
      _movie_id:movie_id},
      {user_ids:user_id})
    if(available_movie) {
      req.fav_movie = available_movie;
      next()
    } else {
      const new_movie = new UsersMovies({
        _movie_id:movie_id,
        user_ids:user_id})
        new_movie.save()
          if(new_movie) {
            req.fav_movie = new_movie;
            next()
          } else {
            next(new Error(e))
          }
    }
  } catch (e) {
    next(e)
  }
}

const getAllFav = async (req, res, next) => {
  console.log("getAllMovies hit");
  const { id } = req.params
  const user_id = id.replace(':','');
  try {
    const doc = await UsersMovies.find({user_ids: { $all: [ user_id ] } });
    if (!doc) {
      next(new Error('not found'))
    }
    req.fav = doc
    next()
  } catch (e) {
    next(e)
  }
}

const RemoveFavMovie = async (req, res, next) => {
  const { movie_id, user_id } = req.body
  console.log('RemoveFavMovie hit')
  console.log(movie_id)
  console.log(user_id)
  try {
    const remove_movie = await UsersMovies.findOneAndDelete({
      _movie_id:movie_id},
      {user_ids:user_id})

      if (remove_movie) {
        const updated_movie = await UsersMovies.find({user_ids:user_id})
        req.fav_movie = updated_movie
        next()
      }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  UpdateFavMovie,
  getAllFav,
  RemoveFavMovie
}