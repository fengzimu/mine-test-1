var router = require('express').Router();

router.route('/').get(function (req, res) {
    res.render('projects/detail', {title: 'GAIA | Detail'});
});

module.exports = router;