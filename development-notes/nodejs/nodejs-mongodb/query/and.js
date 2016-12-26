var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    /** DB CALLS GO HERE **/

    // necessary when the same field or operator has to be specified in multiple expressions.
    var query = { 'State':'Florida', '$and':[
    	{'Wind Direction': {'$exists':true}},
    	{'Wind Direction': {'$gt':70}}
    ] };

    db.collection('data').find(query).toArray(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });

    /** ================ **/
});
