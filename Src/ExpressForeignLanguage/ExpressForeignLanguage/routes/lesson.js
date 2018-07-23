'use strict';
var express = require('express');
var router = express.Router();

//GET lesson status
router.get('/', function (req, res) {
    res.render('Lesson/status', {title : 'Lesson status'})
});

/** GET lesson learn */
router.get('/learn', function (req, res) {
    res.render('Lesson/learn', { title:'Learning' })
});

/** POST lesson report*/
router.post('/report', function (req, res) {
    res.render('Lesson/report', { title:'Report' })
});
module.exports = router;