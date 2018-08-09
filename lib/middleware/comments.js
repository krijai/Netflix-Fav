const Movies = require('../models/Movies')

const UpdateMovieComments = async (req, res, next) => {
    const {
      movie_id,
      user_id,
      comments
    } = req.body

    console.log("before try",user_id)

    try {
      // finds the movie_id with the filter of matching user_id and sets the rating
      //And also returns the whole object of the updated data
      var available_comments = await Movies.findOneAndUpdate(
        {_id:movie_id},
        {$set: {
        "users_ratings_comments.$[elem].comments": comments
        }},
        {
          new: true,
          arrayFilters:[
          {"elem.user_id": user_id}
        ]},
    
      )

      newComment = async () =>  {
        // var {user_id} = req.body
        console.log(user_id)
        var new_comment = await Movies.findOneAndUpdate(
          {_id:movie_id},
          {$set: {
            'users_ratings_comments':[{
              user_id,
              comments: comments
            }],
            }
          }
        )
        req.comments = new_comment
        next()
        console.log('user_id after',user_id)
        console.log('new_rating',new_rating)
        }

      console.log("try",user_id)

      //Filters out and returns Ratings and comments for the current user
      if((available_comments.users_ratings_comments).length > 0) {
      available_comments.users_ratings_comments = 
      available_comments.users_ratings_comments.filter( (usr_detail)=> {
          if( (usr_detail.user_id === user_id) && (usr_detail) ){
            console.log("if hit")
            return usr_detail
          } else {
            console.log("else hit")
            newComment()
          }
        }
      )
      } else {
        newComment()
      }

    req.comments = available_comments
    next()
    }
      catch (e) {
        console.log('UpdateMovieRating try catch error')
        next(e)
      }
    }


    const RemoveMovieComments = async (req, res, next) => {
      const {
        movie_id,
        user_id
      } = req.body

      console.log('movie_id and user_id',movie_id, user_id)
  
  
      try {
        // finds the movie_id with the filter of matching user_id and sets the rating
        //And also returns the whole object of the updated data
        var available_comments = await Movies.findOneAndUpdate(
          {_id:movie_id},
          {$set: {
            "users_ratings_comments.$[elem].comments": undefined
          }
          },
          {
            new: true,
            arrayFilters:[
            {"elem.user_id": user_id}
          ]},
        )

        console.log('RemoveMovieComments hit and available_comments set', available_comments)
  
        //Filters out and returns Ratings and comments for the current user
        if((available_comments.users_ratings_comments).length > 0) {
        available_comments.users_ratings_comments = 
        available_comments.users_ratings_comments.filter( (usr_detail)=> {
            if( (usr_detail.user_id === user_id) && (usr_detail) ){
              console.log("if hit")
              return usr_detail
            } else {
              console.log("else hit")
            }
          }
        )
        }
  
      req.comments = available_comments
      next()
      }
        catch (e) {
          console.log('RemoveMovieComments try catch error')
          next(e)
        }
      }

    module.exports = {
      UpdateMovieComments,
      RemoveMovieComments
    }