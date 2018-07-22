const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/Users')

router.post('/', findUserByEmail, async (req, res, next)=> {
  
})