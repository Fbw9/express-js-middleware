// https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113
// https://expressjs.com/en/guide/writing-middleware.html
var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    req.myCustomProperty = Date.now();
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.get('/', function (req, res) {
    console.log('req.myCustomProperty:', req.myCustomProperty);
    res.send('/ get request ' + ' at ' + req.myCustomProperty);
})

app.get('/users', function (req, res) {
    res.send('/about get request');
})

app.get('/about', function (req, res) {
    res.send('/about get request');
})

app.listen(3000)
