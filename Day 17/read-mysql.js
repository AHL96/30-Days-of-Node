var mysql = require('mysql')

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

var read_R = 'SELECT * FROM details'

connect.getConnection((err, connection) => {
    connection.query(read_R, (err, data) => {
        if (err) throw err;
        else {
            console.log(data);
        }
    })
    connection.release();
})