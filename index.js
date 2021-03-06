
// This part is like 'import'
const express = require('express')  // Express takes care of the http, request andresponse objects behind the scenes.
const path = require('path')  // the point is to ensure that things run smoothly regardless if the OS is Win, Mac or Linux
const ejs = require('ejs')  // template engine
const mongoose = require('mongoose')  // Mongoose is an officially supported Node.js package helping to talk to MongoDB from Node
const bodyParser = require('body-parser')  // body-parser parse incoming request bodies in a middleware and make the form data available under the req.body property
const fileUpload = require('express-fileupload')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true}) // it there isn't one, then create it

const app = new express()

/* All these app.use are middleware, will be executed before handling the request */
app.use(express.static(path.join(__dirname, '/public'))); // Express will expect all static assets to be in this directory
app.set('view engine', 'ejs')  // tell Express to use EJS as templating engine, any file ending in .ejs should be rendered with the EJS package.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

const validateMiddleWare = require('./middleware/validationMiddleware')
app.use('/posts/store', validateMiddleWare) // to apply middleware for specific url requests

/*
* const http = require('http)
* const server = http.createServer((req, res) => {
*   ...
* })
* server.listen(3000)
* */

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

const homeController = require('./controllers/home')
app.get('/', homeController)

const searchPostController = require('./controllers/searchPost')
app.post('/search', searchPostController)

// app.get('/about',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
//     res.render('about')
// })
//
// app.get('/contact',(req,res)=>{
//     // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
//     res.render('contact')
// })

const getPostController = require('./controllers/getPost')
app.get('/post/:id', getPostController)

const newPostController = require('./controllers/newPost')
app.get('/posts/new', newPostController)

const storePostController = require('./controllers/storePost')
app.post('/posts/store', storePostController)

const newUserController = require('./controllers/newUser')
app.get('/auth/register', newUserController)

const storeUserController = require('./controllers/storeUser')
app.post('/users/register', storeUserController)