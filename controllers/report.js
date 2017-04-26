module.exports = {
    index: function (req, res) {
        res.render('form', {
            mapScripts: true, 
            mapMarkerScript: true
        });
    },
    create: function (req, res) {
        res.render('report', {
            mapScripts: true
        });
    }
};
