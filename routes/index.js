var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function (req, res) {
    res.render('index');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash('error', 'You are not logged in.');
    res.redirect('/users/login');
}

module.exports = router;