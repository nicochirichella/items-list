const mongoose = require('mongoose');
var db_config = require('../config/db-config');

mongoose.connect(db_config.connection.url , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });
mongoose.Promise = global.Promise;
module.exports = mongoose;