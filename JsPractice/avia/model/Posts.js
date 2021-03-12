const mongoose = require('mongoose');

const PostsShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 512,
    min: 3
  },
  content: {
    type: String,
    required: true,
    min: 10
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Posts', PostsShema);