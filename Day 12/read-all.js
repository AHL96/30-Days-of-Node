var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) {
        throw error
    }
    var dbase = db.db('demo_db')
    dbase.collection('details').find({}).toArray((err, collection) => {
        if (err) {
            throw err
        }
        console.log('record read successfully');
        console.log(collection);
        db.close()

    })
})