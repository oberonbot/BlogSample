const User = require('../models/User')  // import User model

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if(error){
            return res.redirect('/auth/register')
        }
        res.redirect('/')
    })
}