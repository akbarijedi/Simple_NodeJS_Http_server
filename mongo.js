// Test MongoDB Connection page

// TODO: import mongodb module
var MongoClient = require('mongodb').MongoClient;
// TODO: mongoDB server url
var dbUrl = 'mongodb://localhost:27017/';

MongoClient.connect(dbUrl)
.then((db)=>{
    console.log('salam');
    
    // TODO: specify the database
    var dbo = db.db('task');

    // TODO: create a sample document
    var mytask = {task:'task1',complete:false};

    // TODO collectionName
    var collectionName = 'tasks';

    // TODO: write document to collection(table)
    dbo.collection(collectionName).insertOne(mytask).then((resp)=>{
        
        console.log('1 Doc inserted!');
        db.close();
    }).catch((err)=>{console.log(err);});

}).catch((err)=>{
console.log(err);
});
console.log('DONE!');
