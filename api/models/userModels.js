const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please supply a valid username or password']
  },
  password: {
    type: String,
    required: [true, 'Please supply a valid username or password']
  }
});

module.exports = mongoose.model('User', User);