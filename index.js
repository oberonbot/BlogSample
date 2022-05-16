
// This part is like 'import'
const express = require('express')  // Express takes care of the http, request andresponse objects behind the scenes.
const path = require('path')  // the point is to ensure that things run smoothly regardless if the OS is Win, Mac or Linux
const ejs = require('ejs')  // template engine
const mongoose = require('mongoose')  // Mongoose is an officially supported Node.js package helping to talk to MongoDB from Node
const bodyParser = require('body-parser')  // body-parser parse incoming request bodies in a middleware and make the form data available under the req.body property
const BlogPost = require('./models/BlogPost')  // import BlogPost model
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true}) // it there isn't one, then create it

const app = new express()

app.use(express.static(path.join(__dirname, '/public'))); // Express will expect all static assets to be in this directory
app.set('view engine', 'ejs')  // tell Express to use EJS as templating engine, any file ending in .ejs should be rendered with the EJS package.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

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

app.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')  // res.render() will look in a 'views' folder for the file index.ejs(template)
})

app.get('/about',(req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
})

app.get('/contact',(req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
})

app.get('/post',(req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
})

app.get('/post/new',(req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('create')
})

app.post('/posts/store', (req,res)=>{
    console.log(req)
    res.redirect('/')
})