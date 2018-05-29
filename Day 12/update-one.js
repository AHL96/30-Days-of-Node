var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) throw error

    var dbase = db.db('demo_db')

    var query = { name: 'Alex' }
    var new_data = { $set: { name: 'nodejsera.com', moblie: 1234567890 } }

    dbase.collection('details').updateOne(query, new_data, (err, collection) => {
        if (err) {
            throw err
        }
        console.log('record updated successfully');
        console.log(collection);
        db.close()

    })
})