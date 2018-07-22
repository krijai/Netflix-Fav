const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/signup')
const config = require('config')
const PORT = process.env.PORT || config.PORT
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI


app.use(bodyParser.json())
app.use(router)

app.get('/', (req,res) => {
  res.status(200).json({
    message: "Hello World"
  })
})

app.listen(PORT, async ()=> {
  await mongoose.connect(MONGODB_URI)
  console.log(`Listening on ${PORT}`)
})