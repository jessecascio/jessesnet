var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    /** DB CALLS GO HERE **/

    var query = { 'State' : 'Florida' };

    db.collection('data').find(query).count(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });

    /** ================ **/
});
