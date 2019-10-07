var router = require('express').Router();

router.route('/').get(function (req, res) {
    res.render('projects/list', {title: 'GAIA | List'});
});

module.exports = router;