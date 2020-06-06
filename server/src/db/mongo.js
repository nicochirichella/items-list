var MongoClient = require('mongodb').MongoClient;
var db_config = require('../config/db-config');

MongoClient.connect(db_config.connection.url, function(err, db) {
  if (err) {
      console.log(err);
  }
  console.log("Database created!");
  db.close();
});

module.exports = MongoClient;