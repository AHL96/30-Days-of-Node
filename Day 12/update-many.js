var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) {
        throw error
    }
    var query = { age: { $gt: 20 } }
    var data = { $set: { age: 'above 22' } }

    var dbase = db.db('demo_db')
    dbase.collection('details').updateMany(query, data, (err, collection) => {
        if (err) {
            throw err
        }
        console.log(collection.result.nModified + ' records(s)');
        console.log(collection);
        db.close()


    })
})