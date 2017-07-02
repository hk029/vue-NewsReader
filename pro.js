var express = require('express');
var app = express();
var fs = require('fs');
var data = fs.readFileSync('./dist/index.html');

app.use(express.static('dist'));



var server = app.listen(8080, function () {

  console.log('Example app listening at http://%s:%s', host, port);
});