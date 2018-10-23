const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')

const server = express()

server.set('port', process.env.PORT || 3030)
server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/product", (req, res) => {
  res.sendFile(__dirname + "/public/product.html")
})
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})
server.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/public/blog.html")
})
server.get("/category", (req, res) => {
  res.sendFile(__dirname + "/public/category.html")
})
server.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/public/cart.html")
})
server.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html")
})
server.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html")
})
server.get("/account", (req, res) => {
  res.sendFile(__dirname + "/public/account.html")
})
server.get("/contact-us", (req, res) => {
  res.sendFile(__dirname + "/public/contact-us.html")
})
server.listen(server.get('port'), (req, res) => {
  console.log("Server is running on port %s...", server.get('port'));
})