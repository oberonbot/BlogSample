const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost') // import the model we just created by specifying its relative path

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})  // connect to the database,

// this is to say find all the documents under this collection
BlogPost.find({}, (error, blogpost) => {
    console.log(error, blogpost)
})

// read document based on title
BlogPost.find({
    title: "Let's try another blog"
}, (error, blogpost) => {
    console.log(error, blogpost)
})

BlogPost.find({
    title: /The/
}, (error, blogpost) => {
    console.log(error, blogpost)
})

// read document based on ID
var id = '627ec61ddc079f14d35b26b4'
BlogPost.findById(id, (error, blogpost) => {
    console.log(error, blogpost)
})
