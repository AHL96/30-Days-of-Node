var mysql = require('mysql')

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

var delete_R = 'DELETE FROM details WHERE name=?'

connect.getConnection((err, connection) => {
    connection.query(delete_R, ['regii'], (err, res) => {
        if (err) throw err;
        else {
            console.log('A record is removed!');

        }
    })
    connection.release()
})