var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) throw error
    var data = {
        name: 'Alex',
        age: 21,
        moblie: 1234567890
    }
    var dbase = db.db('demo_db')
    dbase.collection('details').insertOne(data, (err, collection) => {
        if (err) throw err

        console.log('record inserted successfully');
        console.log(collection);


    })
    db.close()

})
