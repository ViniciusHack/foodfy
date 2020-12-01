const express = require('express');
const nunjucks = require("nunjucks")
const recipes = require('./data')

const server = express();

server.use(express.static("public"))
server.use(express.static("images"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    noCache:true,
    autoescape:false,
})

server.get('/', function(req, res) {
    return res.render('index', {items:recipes})
})

server.get('/sobre', function(req, res) {
    return res.render('about')
})

server.get('/receitas', function(req, res) {
    return res.render('recipes', {items:recipes})
})

server.get('/detalhes', function(req, res) {
    return res.render('details', {items:recipes})
})

server.listen(5600, function(){
    console.log("server is running")
})