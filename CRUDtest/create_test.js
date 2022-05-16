const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost') // import the model we just created by specifying its relative path

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})  // connect to the database,

BlogPost.create({
    title: "Let's try another blog",
    body: "So I'm practicing Node.js right, and I'm about to practice the create command, this is amazing"
}, (error, blogpost) => { // callback function which is called when create finishes execution
    console.log(error, blogpost)
})