'use strict';
var express = require('express');
var router = express.Router();

//GET lesson status
router.get('/', function (req, res) {
    res.render('Lesson/status', {title : 'Lesson status'})
});

module.exports = router;