const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');

app.set('port', process.env.TEST_PORT || 8080);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/remote', function(req, res) {
    res.sendfile(__dirname + '/public/remote.html');
});

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
