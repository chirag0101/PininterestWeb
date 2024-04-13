var express = require('express');
var router = express.Router();
const userModel=require("./users");
const postModel=require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/createUser',async (req,res,next)=>{
  const user=await userModel.create({
    username: "chirag",
    password: "chirag",
    posts: [],
    email: "chirags0104@gmail.com",
    fullname: "Chirag Sanjay Suryawanshi"
  });
  res.send(user);
})

router.get('/Det',async (req,res,next)=>{
  let user=await userModel.findOne({_id:"661a6c978e4123ae002e30e5"}).populate('posts');
  res.send(user);
})

router.get('/createPost',async (req,res,next)=>{
  var post=await postModel.create({
    postText:"hello bhai",
    user:"661a6c978e4123ae002e30e5"
  })
  
let user=await userModel.findOne({_id: "661a6c978e4123ae002e30e5"})

user.posts.push(post._id)

await user.save()
  
res.send(post)
})

module.exports = router;
