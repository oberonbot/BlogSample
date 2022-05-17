const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost') // import the model we just created by specifying its relative path

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})  // connect to the database,

BlogPost.create({
    title: "Lala Land",
    body: "La La Land is a 2016 American romantic musical comedy-drama film written and directed by Damien Chazelle. It stars Ryan Gosling and Emma Stone as a ...",
    username: 'Ethan',
    datePosted: new Date()
}, (error, blogpost) => { // callback function which is called when create finishes execution
    console.log(error, blogpost)
})