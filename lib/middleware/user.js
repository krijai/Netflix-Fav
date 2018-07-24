const User = require('../models/Users')

const findUserByEmail = async (req, res, next) => {
  console.log("hit")
  const { email } = req.body

  console.log("email: "+email)

  if (!email) {
    next(new Error('unauthorized'))
  }

  try {
    const doc = await User.findOne({ email })
    if (!doc) {
      next(new Error('not found'))
    }
    req.user = doc
    next()
  } catch (e) {
    next(e)
  }
}

module.exports = {
  findUserByEmail
}