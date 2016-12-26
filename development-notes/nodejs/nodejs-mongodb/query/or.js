var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    /** DB CALLS GO HERE **/

    var query = { 'State':'Florida', '$or':[
    	{'Temperature':{'$gt':80},'Humidity':{'$lt':60}},
    	{'Wind Speed':{'$lt':10},'Sea Level Pressure':{'$gt':200}}
    ] };

    db.collection('data').find(query).toArray(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });

    /** ================ **/
});
