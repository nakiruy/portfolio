const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
