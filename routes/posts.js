const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.connect("mongodb://127.0.0.1:27017/Posts");

const postSchema = new Schema({
  postText: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [ ]
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
