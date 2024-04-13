const express = require('express');
const mongoose = require('mongoose');

var app=express();

app.get('/',(req,res)=>{
  res.render('index');
})

app.listen(3000,()=>{
  console.log("Done!");
});