const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.Server(app);
const port = 4000;
const items = require('./routes/items');

const cors = require('cors');
const mongoose = require('./db/mongo');

mongoose.connection.on('error', console.error.bind(console, 'There was an error connecting to mongo_db'));
mongoose.connection.once('open', function callback () {
  console.log("mongo_db connection succed");
});

app.use(express.json());
app.use(cors());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: false }));

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use('/items', items)

app.use((err, req, res, next) => { 
  res.status(err.status || 500)
    .json({
      code: err.code || 'generic_error',
      message: err.message || 'Internal server error',
      context: err.context || {},
    });
});

server.listen(port);
console.debug('Server listening on port ' + port);