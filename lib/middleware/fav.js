const UsersMovies = require('../models/UsersMovies')

const UpdateFavMovie = async (req, res, next) => {
  console.log("add or update favorite Movie hit");
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
    console.log("UpdateFavMovie try catch error");
    next(e)
  }
}

const getAllFav = async (req, res, next) => {
  console.log("getAllMovies hit");
  const { id } = req.params
  const user_id = id.replace(':','');
  console.log("user_id")
  console.log(user_id)
  try {
    const doc = await UsersMovies.find({user_ids: { $all: [ user_id ] } });
    console.log("movies list")
    console.log(doc)
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
  try {
    const remove_movie = await UsersMovies.findOneAndDelete({
      _movie_id:movie_id},
      {user_ids:user_id})
  } catch (e) {
    next(e)
  }
}

module.exports = {
  UpdateFavMovie,
  getAllFav,
  RemoveFavMovie
}