var mysql = require('mysql')

var connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
connect.getConnection((err, connection) => {
    connection.query(insert_R, ['rejuu', 24], (err, res) => {
        if (err) throw err;
        else {
            console.log('Details added successfully');
        }
    })

    connection.release()
})