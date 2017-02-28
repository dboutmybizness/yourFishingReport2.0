module.exports = {
    index: function (req, res) {
        res.render('form'), {
            mapScripts: true
        };
    },
    create: function (req, res) {
        res.render('report');
    }
};
