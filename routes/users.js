const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/Pininterest");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Post'
    // }
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  dp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
