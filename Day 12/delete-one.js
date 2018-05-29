var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) {
        throw error
    }

    var dbase = db.db('demo_db')

    var query = { age: 'above 22' }

    dbase.collection('details').deleteOne(query, (err, collection) => {
        if (err) throw err

        console.log(collection.result.n + ' Record(s) deleted successfully');
        console.log(collection)
        db.close()


    })

})