var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (error, db) => {
    if (error) {
        throw error;
    }
    var dbase = db.db('demo_db')
    dbase.collection("details").drop((err, collection) => {
        if (err) throw err;
        if (collection) console.log("Dropped successfully");
        db.close();
    });
});