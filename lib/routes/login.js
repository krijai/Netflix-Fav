const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/Users')
const { issueToken } = require('../middleware/auth')

const findUserByEmail = async (req, res, next) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) {
      req.user = user
      next()
    } else {
      req.user = null
      next()
    }
  } catch (e) {
    next(e)
  }
}

router.post('/', findUserByEmail, issueToken, async (req, res, next) => {
  if(req.user && req.token) {
    const { token } = req
    if (token) {
      res.status(200).json({ token })
    } else {
      next(new Error('internal server error'))
    }
  } else {
    res.json({
      token: null
    })
  }
})

module.exports = router

// findUserByEmail
//   - Compares the email in the req body with the list of emails available in mongodb
//   - If a match is found, it returns the whole object of the matched email from the db, 
//   which is stored in the variable of "user" in the req which is an object type.

//   issueToken
//    - Compares the password in the req body entered by the user to the password in the 
//    "user" object created using findUserByEmail
//    - If a match is found, it creates a new variable called "token" in req, 
//    and creates a jwt token and stores in it
//    - Then Check the status and return the token to frontend
//    - Now the Front End stores the token in the browser and and also adds 
//    the same token in the header as Authorization: to send a "get request"

// verifyToken
//    - the get request takes the Authorization and decodes it using jwt and creates a new variable
//    "decoded" in the req

// getUserById
//    - to get the user details back we are searching by id, 
//    as we have added the id in the token while creating it
//    - this id has been decoded and stored in the object "decoded" which is added to the req
//    - Once the user is found we again store the user details as an object in the req with 
//    the name of "user"

//    - Finally we check the status and send back that "user object as a response"
//    - Now we set that object to a state in the frontend and use it for rendering
