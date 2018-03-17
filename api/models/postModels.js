const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Post = new mongoose.Schema({
  author: {
    type: ObjectId,
    required: [true, 'An author must be supplied for a post']
  },
  title: String,
  content: String,
  comments: []
});

module.exports = mongoose.model('Post', Post);