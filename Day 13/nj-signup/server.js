var express = require('express')
var path = require('path')
var mongo = require('mongodb')
var bodyParser = require('body-parser')
var crypto = require('crypto')

var app = express()
var new_db = "mongodb://localhost:27017/database_name"

app.get('/', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    return res.redirect('/public/index/html')
}).listen(3000)

console.log('Server listening at : 3000');
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var getHash = (pass, phone) => {
    var hmac = crypto.createHmac('sha512', phone);
    data = hmac.update(pass)
    gen_hmac = data.digest('hex')
    console.log("hmac : " + gen_hmac);
    return gen_hmac

}

app.post('/sign_up', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var pass = req.body.password
    var phone = req.body.phone
    var password = getHash(pass, phone)

    var data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    }

    mongo.connect(new_db, (error, db) => {
        if (error) throw error
        console.log('connected to database successfully');
        var dbo = db.db('details')
        dbo.collection('details').insertOne(data, (err, collection) => {
            if (err) throw err
            console.log('record inserted successfully');
            console.log(collection)

        })
    })

    console.log('data is ' + JSON.stringify(data))
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    return res.redirect('/public/success.html')
})