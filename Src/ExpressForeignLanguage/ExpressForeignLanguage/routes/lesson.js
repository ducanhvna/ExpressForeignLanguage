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

/** GET lesson edit page*/
router.get('/edit', function (req, res) {
    res.render('Lesson/edit', { title:'Add Create Item for lesson' });
});

/** POST lesson edit page */
router.post('/edit', function (req, res) {
    res.render('Lesson/detail', { title: 'Detail of lesson' });
});

/** GET lesson create page*/
router.get('/create', function (req, res) {
    res.render('Lesson/create', { title: 'Add Create Item for lesson' });
});

/** POST lesson create page */
router.post('/create', function (req, res) {
    res.render('Lesson/detail', { title: 'Detail of lesson' });
});
module.exports = router;