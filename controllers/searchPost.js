const BlogPost = require('../models/BlogPost')  // import BlogPost model

module.exports =  async(req, res) => {
    var keyword = req.body.keyword
    var regex = new RegExp(keyword,"i");

    const blogposts = await BlogPost.find({
        title: regex
    })
    res.render('index', {
        blogposts
    })
}