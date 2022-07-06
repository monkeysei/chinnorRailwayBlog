const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// my blogs stored in an array
let posts = [];

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/trivia", function(req, res){
  res.render("trivia");
});


app.get("/blog", function(req, res){

  posts = [];
  // adding the posts one by one
  let post = {
    title: "My fantastic work experience at Chinnor Princes Risborough Railway",
    content: "I was looking for a place to do my Y10 work placement experience. Since I was a small child, I loved trains, especially Thomas the Tank Engine series. I went on many steam engine train rides including Chinnor Princes Risborough Railway and I hoped I could work for these trains for my work experience. As I read an article in Chinnor Pump about Chinnor Princes Risborough Railway looking for members of the engineering department, I decided to take a chance and applied to them. I was delighted to receive the positive answer and I started my “dream comes true” work experience from Monday 23rd May!  When I arrived on the first day, I was welcomed by Gavin, the Engineering Director, and Jeremy, the Engineering Director. They showed me around the yard and introduced me to the rest of the railway crew. They are all friendly and encourage me to try various aspects of locomotive engineering work. I spent the first day learning about the craft of train maintenance as I was placed under a locomotive to grease the train. I always wondered what it looked like under the locomotive, and it was amazing to see it with my own eyes. I learnt funny expressions like \“grease nipples\”! Tuesday onwards, I was given a variety of tasks from helping repair a part of a carriage, helping Gavin with rebuilding the miniature locomotive, examining the train they got recently to check if it is fit enough to run on the rails, fixing breaks of trains… There is so much to learn and it is very fun. I felt they treated me as a proper new crew member, teaching me and training me thoroughly. We talked about the theory of the examination of the trains, how train maintenance had changed over the years and also how train engineering had become a dying art. I was immersed in all the aspects of locomotive and railway work, from mechanical engineering, restoration to maintenance. I am surprised how much work is involved to keep this amazing legacy from the Victorian time, and I truly admire those who work on these locomotives. My teacher from school visited me on the site, and told me that my work experience is the most interesting one he had seen over years of his experience as a work experience coordinator. Their concern is that there are not many young people involved, and if the younger generation doesn’t step in, locomotive engineering will die out in the near future. They are building new miniature trains so that the younger generation will be able to learn the art of locomotives. They are offering weekly voluntary sessions for the youngsters to help out Chinnor Princes Risborough Railway, and I strongly recommend anyone to join us! It is so much fun, and you will become a part of history!",
    published: "15th of June 2022"
  };
  posts.push(post);

  post= {
    title: "Join the gang",
    content: "In last month’s Chinnor Pump, I wrote about my work placement experience at Chinnor and Princes Risborough Railway. I had become a junior member of the Railway since and go to young volunteer’s workshops on Saturdays. My best friend, who shares the same passion for trains and mechanical engineering, joined me all the way from Didcot, saying the experience CPRR offers is far more interesting than the one in Didcot Railway Centre. If you become a member, you will receive not only a beautiful membership card, but also a cool high-vis vest with CPRR Logo on. We are going to focus on building a miniature railway from July. It is a big project for us, but we are really excited! Best of all, the crew are so friendly and have a great sense of humour; they are planning to make a team t-shirt saying \“Bob the builder can we fix it? No, it’s fucked!\”. I can’t wait to see that (;>v<;) So please join us! The more the merrier!",
    published: "1st of July 2022"
  };
  posts.push(post);

  res.render("blog", {
    posts: posts
    });
});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content,
        publishedDate: post.published
      });
    }
  });

});


const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port " + port);
});
