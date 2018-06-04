var mysql = require('mysql')

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

var update_R = 'UPDATE details SET age = ? WHERE name=?';
connect.getConnection((err, connection) => {
    connection.query(update_R, [25, 'regii'], (err, res) => {
        if (err) throw err;
        else {
            console.log('Updated the age of regii');

        }
    })
    connection.release();
})