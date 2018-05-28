var mongo = require('mongodb')
//Establishing the connection
var url = "mongodb://localhost:27017/demo_db"

//establishing the connection
mongo.connect(url, (error, db) => {
    if (error) throw error;

    console.log('Database created');
    db.close()

})

