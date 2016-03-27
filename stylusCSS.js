var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.use(require('stylus').middleware('public'));

app.listen(process.argv[2]);
