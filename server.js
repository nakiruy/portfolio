const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});
