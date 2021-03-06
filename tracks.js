var _ = require('underscore');
var express = require('express');
var request = require('request');

var app = express();

app.set('port', (process.env.PORT || 3000))
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    request('http://x.exercism.io/tracks', function(err, response, body) {
        if (err) {
            throw err;
        }

        tracks = _.where(JSON.parse(body).tracks, { active: true });
        res.render('index', tracks);
    });
});

app.listen(app.get('port'), function() {
    console.log('Starting exercism tracks app on port 3000...');
});
