var home = require('../controllers/home'),
    reports = require('../controllers/reports'),
    report = require('../controllers/report');

module.exports.initialize = function (app, router) {
    router.get('/', home.index);
    router.get('/report', report.index);
    router.get('/reports', reports.index);

    router.post('/report', report.create);
    app.use('/', router);
};
