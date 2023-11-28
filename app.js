// console.log("im in server side havajsciprt");

const express = require('express')
const app = express()

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.send('Hello World from Node & Express')
})

app.get('/ejs', function (req, res) {
    res.render("index", {
        data: "my sever side data"
    })
  })

app.get('/bazooka', function (req, res) {
    res.sendFile("index.html")
  })

app.listen(3000)