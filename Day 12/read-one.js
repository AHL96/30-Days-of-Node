var mongo = require('mongodb')
var new_db = 'mongodb://localhost:27017/demo_db'

mongo.connect(new_db, (err, db) => {
    if (err) throw err
    var dbase = db.db('demo_db')
    dbase.collection('details').findOne({}, (error, collection) => {
        if (error) throw error

        console.log('Record read successfully');
        console.log(collection);

        db.close()

    })

})