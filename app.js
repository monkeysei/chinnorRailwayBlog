//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});



const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port " + port);
});
