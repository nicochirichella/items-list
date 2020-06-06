const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.Server(app);
const port = 4000;

const cors = require('cors');


server.listen(port);

app.use(express.json());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: false }));
// app.use(cors)

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.use('/items', require('./routes/items'))


console.debug('Server listening on port ' + port);