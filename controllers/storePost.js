const path = require('path')  // the point is to ensure that things run smoothly regardless if the OS is Win, Mac or Linux
const BlogPost = require('../models/BlogPost')  // import BlogPost model

/* to resolve callback hell problem, use async and await,
so redirection will wait for BlogPost.create finished and then executed */
module.exports = (req, res) => {
    // console.log(req.body)
    // console.log(req.files.image)
    // console.log(__dirname)
    let image = req.files.image // this one's using fileUpload middleware
    image.mv(path.resolve(__dirname, '..', '/public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            title: req.body.title,
            body: req.body.body,
            username: req.body.username,
            image: '/assets/img/' + image.name
        })
        res.redirect('/')
    })
}