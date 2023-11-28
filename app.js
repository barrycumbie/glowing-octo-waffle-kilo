// console.log("im in server side havajsciprt");

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from Node & Express')
})

app.get('/bazooka', function (req, res) {
    res.sendFile("index.html")
  })

app.listen(3000)