const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/Users')
// const { issueToken } = require('../middleware/auth')
const tokenService = require('../tokenService')

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

router.post('/', findUserByEmail, async(req,res,next)=> {
  console.log(req.user)
  if(!req.user) {
    const { email, password, phone} = req.body
    const user = new User({email,password,phone})
    user
      .save()
      .then(doc=>{
        const token = tokenService.create(doc)
        res.status(200).json({
          message: "success",
          payload: doc,
          token: token
        });
        console.log("doc");
        console.log(doc);
      })
      .catch(err=>{
        res.status(500).json({
          message: err.message
        })
      })
  } else {
    res.json({
      message: null
    })
  }
})

module.exports = router