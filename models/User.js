const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt') // used for encrypt the password

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash) => {
        // the number of rounds of hashing to take place, more rounds, more secure but slower the process
        // the third argument is the function that is called when the hash completes
        user.password = hash
        next()
    })
})

// export model
const User = mongoose.model('User', UserSchema)
module.exports = User