var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, function (error, db) {
    if (error) {
        throw error;
    }
    var dbase = db.db('demo_db')
    dbase.collection("details").find({ section: "arts" }).project({ _id: 0, name: 1 }).toArray((err, collection) => {
        if (err) throw err;
        console.log("Record Read successfully");
        console.log(collection);
        db.close();
    });
});

