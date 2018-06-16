import express from 'express';
import compression from 'compression';
var path =  require('path');
var open = require('open');
const port = 3333;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if(err){
      console.log("err"); // eslint-disable-line no-console
    }
    else{
      open('http://localhost:' + port);
    }
});
