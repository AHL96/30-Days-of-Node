var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
    res.send('Simple Example of routes!')
})

app.get('/signup', function (req, res) {
    res.send('This is a sign up page')
})

app.get('/signin', function (req, res) {
    res.send('This is a signin page')
})

app.get('/signin/dashboard', function (req, res) {
    res.send('This is a demo page')
})

app.listen(3000, function () {
    console.log('Server is listening at 3000')
})