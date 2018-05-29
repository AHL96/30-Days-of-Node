var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (error, db) => {
    if (error) throw error

    // ascending
    var method = { age: 1 }
    // descending
    var method1 = { name: -1 }


    var dbase = db.db('demo_db')
    dbase.collection('demo_db').find().sort(method).toArray((err, collection) => {
        if (err) throw err
        console.log(collection);
        db.close()

    })

})
