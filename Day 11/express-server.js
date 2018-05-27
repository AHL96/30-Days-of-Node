var express = require('express')
var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
    res.send('Simple Example of routes!')
})

app.get('/signup', function (req, res) {
    res.send('This is a sign up page')

    // this is how we will recieve params from the front end
    var name = req.query.name;
    var email = req.query.email;
    var password = req.query.password;
    console.log(name + ' ' + email + ' ' + password);

    res.send('in signup module')

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