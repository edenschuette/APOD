var express = require('express');
var app = express();


app.use(express.static(__dirname + '/View'));


var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});