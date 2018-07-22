'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('Plan/create', { title: 'Create Plan' });
});

module.exports = router;