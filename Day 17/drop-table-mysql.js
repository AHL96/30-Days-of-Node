var mysql = require('mysql')

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

var drop_T = 'DROP table details'
connect.getConnection((err, connection) => {
    connection.query(drop_T, (err, res) => {
        if (err) throw err
        else {
            console.log('The details table is removed successfully');
        }
    })

    connection.release()
})