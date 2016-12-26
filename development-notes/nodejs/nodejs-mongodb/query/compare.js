var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    /** DB CALLS GO HERE **/

    var query = { 'State':'Florida', 'Temperature':{'$gt':75,'$lt':80}, 'Sea Level Pressure':{'$lte':120} };

    db.collection('data').find(query).toArray(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });

    /** ================ **/
});
