var path = require('path'),
    routes = require('./routes'),
    hbs = require('express-handlebars'),
    moment = require('moment'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

module.exports = function (app) {
    //configuration code ...
    //setting Handlebars as the rendering engine of choice

    app.engine('hbs', hbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            timeago: function (timestamp) {
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);
    app.set('view engine', 'hbs');

    app.use(morgan('dev'));
    app.use(bodyParser({
        uploadDir: path.join(__dirname, '../public/upload/temp')
    }));
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));

    routes.initialize(app, new express.Router());

    app.use('/public/', express.static(path.join(__dirname, '../public')));

    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    return app;
};
