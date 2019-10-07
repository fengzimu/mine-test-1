var router = require('express').Router();

router.route('/').post(function (req, res) {
    res.render('dashboard', {title: 'GAIA | Dashboard'});
});

router.route('/').get(function (req, res) {
    res.render('dashboard', {title: 'GAIA | Dashboard'});
});

module.exports = router;