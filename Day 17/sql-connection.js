var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});