const BlogPost = require('../models/BlogPost')  // import BlogPost model

module.exports = async (req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    const blogposts = await BlogPost.find({})
    // console.log(blogposts)
    res.render('index', {
        // this is to send view with data we read back to the client browser by using the 2nd argument
        // blogposts: blogposts
        blogposts  // if key name and value name are the same, we can shorten it to just blogposts
    })  // res.render() will look in a 'views' folder for the file index.ejs(template)
}