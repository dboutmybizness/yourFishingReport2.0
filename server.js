var express = require('express'),
    config = require('./server/configure'),
    app = express(),
    mongoose = require('mongoose');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('mongodb://localhost/yourfishingreport');
mongoose.connection.on('open', function() {
	console.log('Mongoose connected.');
});

// Creating an HTTP server using our app object and tell it to listen
// to connections
var server = app.listen(app.get('port'), function () {
    console.log('Server is running at: http://localhost:' +
        app.get('port'));
    console.log('May node be with you.');
});
