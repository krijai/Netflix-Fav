const Movies = require('../models/Movies')

const UpdateMovieRating = async (req, res, next) => {
    const {
      movie_id,
      user_id,
      rating
    } = req.body

    console.log("before try",user_id)

    try {
      // finds the movie_id with the filter of matching user_id and sets the rating
      //And also returns the whole object of the updated data
      var available_rating = await Movies.findOneAndUpdate(
        {_id:movie_id},
        {$set: {
        "users_ratings_comments.$[elem].rating": rating
        }},
        {
          new: true,
          arrayFilters:[
          {"elem.user_id": user_id}
        ]},
    
      )

      newRating = async () =>  {
        // var {user_id} = req.body
        console.log(user_id)
        var new_rating = await Movies.findOneAndUpdate(
          {_id:movie_id},
          {$set: {
            'users_ratings_comments':[{
              user_id,
              rating: rating
            }],
            }
          }
        )
        req.rating = new_rating
        next()
        console.log('user_id after',user_id)
        console.log('new_rating',new_rating)
        }

      console.log("try",user_id)

      //Filters out and returns Ratings and comments for the current user
      if((available_rating.users_ratings_comments).length > 0) {
      available_rating.users_ratings_comments = 
      available_rating.users_ratings_comments.filter( (usr_detail)=> {
          if( (usr_detail.user_id === user_id) && (usr_detail) ){
            console.log("if hit")
            return usr_detail
          } else {
            console.log("else hit")
            newRating()
          }
        }
      )
      } else {
        newRating()
      }

    req.rating = available_rating
    next()
    }
      catch (e) {
        console.log('UpdateMovieRating try catch error')
        next(e)
      }
    }

    module.exports = {
      UpdateMovieRating
    }