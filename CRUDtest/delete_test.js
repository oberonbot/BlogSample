const mongoose = require('mongoose')
const BlogPost = require('../models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

var id = '627ec61ddc079f14d35b26b4'

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost)
})