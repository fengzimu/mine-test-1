var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.render("user/login");
});

// router.post();

module.exports = router;