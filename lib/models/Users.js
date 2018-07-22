const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    regex: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  }
})

module.exports = mongoose.model('User', userSchema)