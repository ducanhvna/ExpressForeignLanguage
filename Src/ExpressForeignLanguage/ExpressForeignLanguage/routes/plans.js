'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('Plan/create', { title: 'Create Plan' });
});

router.post('/create', function (req, res) {
    res.render('Plan/schedule', { title: 'Create Schedule' })
});

router.post('/schedule', function (req, res){
    res.render('Plan/details', { title: 'Report Detail' })
});

// #region Details plan Area
router.get('/details', function (req, res) {
    res.render('Plan/details', { title: 'Report Detail' })
});
// #end region

// #region Edit Plan Area
router.get('/edit', function (req, res) {
    res.render('Plan/edit', { title: 'Edit Plan' })
});

router.post('/edit', function (req, res) {
    res.redirect('../plan/details')
});
// #endregion
module.exports = router;