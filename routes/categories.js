var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Category = require('../models/Category.js');


router.get('/', (req, res, next)=> {
  Category.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});


router.post('/', (req, res, next) =>{
  Category.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/:id',(req, res, next) =>{
  Category.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', (req, res, next)=> {
  Category.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', (req, res, next)=> {
  Category.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;