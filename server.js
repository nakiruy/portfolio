const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

let app = express();

const http = require('http').Server(app);

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

// Keep Heroku app awake
setInterval(function() {
  http.get("http://yurikajacobsson.herokuapp.com");
}, 60000); // every minute

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
