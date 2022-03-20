const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  info: String,
  
})


mongoose.model('users', eventSchema)