const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost') // import the model we just created by specifying its relative path

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})  // connect to the database,

var id = '627ec61ddc079f14d35b26b4'
BlogPost.findByIdAndUpdate(id, {
    title: 'New update'
}, (error, blogpost) => {
    console.log(error, blogpost)
})