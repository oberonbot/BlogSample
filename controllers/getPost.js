const BlogPost = require('../models/BlogPost')  // import BlogPost model

module.exports = async (req,res)=>{
    var id = req.params.id.substring(1)
    const blogpost = await BlogPost.findById(id)
    res.render('post', {  // use post.ejs(html) as page and blogpost as data source
        blogpost
    })
}