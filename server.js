const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
