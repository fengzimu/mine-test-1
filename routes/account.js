var router = require('express').Router();

router.route('/login')
    .get(function (req, res) {
        res.render('account/login', {title: 'Login'});
    });

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/account/login');
});


module.exports = router;
