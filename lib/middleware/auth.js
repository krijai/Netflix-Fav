const jwt = require('jsonwebtoken')
const config = require('../config.json')
const tokenService = require('../tokenService')

const issueToken = async (req, res, next) => {
  const { password } = req.body
  const { user } = req
  console.log(user)
  console.log(password)
  if(user) {
    const match = user.comparePassword(password)
    match.then((match)=> {
      if (match) {
        req.token = tokenService.create(user)
        next()
      } else {
        req.token = null
        next()
      }
    })
  } else {
    req.token = null
    next()
  }
}

const verifyToken = async (req, res, next) => {
  const authHeader = req.get('authorization')

  if (!authHeader) {
    next(new Error('unauthorized'))
  }
  const token = authHeader.split(' ')[1] // grab just the token
  try {
    const decoded = await jwt.verify(token, config.secret)
    if (decoded) {
      req.decoded = decoded
    }
    next()
  } catch (e) {
    next(e)
  }
}

module.exports = {
  issueToken,
  verifyToken
}
