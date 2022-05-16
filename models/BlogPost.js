const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPostSchema = new Schema({   // Schema is the format of the document
    title: String,
    body: String
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)  // .model will create 'BlogPosts' as the collection
module.exports = BlogPost // export BlogPost variable so that when other files require this file, they know to grab BlogPost