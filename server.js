var express = require('express');
var app = express();

app.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

console.log('Listening on port 8080');
app.listen(8080); //the port you want to use