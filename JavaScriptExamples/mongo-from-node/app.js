// npm install mongodb --save-dev
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var url = "mongodb://etherdev:didi22@ds043487.mlab.com:43487/ethereum";
MongoClient.connect(url, function(err, db) {
  if(err) {
    console.log('Unable to connect to the DB server', err);
  }
  else {
    console.log('Connection established');
    var collection = db.collection('samplesite.students');
    collection.find({}).toArray(function(err, result) {
      if (err) {
        console.log("Error retrieving data. ", err);
      }
      else if (result.length){
        console.log("result:", result);
      } else {
        console.log("No documents found");
      }
      db.close();
    });
  }
});
