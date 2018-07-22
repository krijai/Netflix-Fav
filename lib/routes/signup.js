const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/Users')

router.post('/',async(req,res,next)=> {
  const { email, password, phone} = req.body
  const user = new User({email,password,phone})
  user
    .save()
    .then(doc=>{
      res.status(200).json({
        message: "success",
        payload: doc
      });
      console.log(doc);
    })
    .catch(err=>{
      res.status(500).json({
        message: err.message
      })
    })
})

module.exports = router