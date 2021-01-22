var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = require('../models/Product.js');
var Category = require('../models/Category.js');
var ProductCatalog = mongoose.model('Category', Category);



router.get('/', function (req, res, next) {
    Product.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});


router.post('/', function (req, res, next) {
    ProductCatalog.findOne({_id:req.body.id}, function (err, category) {
        if (err) {
            res.json(err);
        }
        else if (category == null) {
            res.json('Category not found!');
        }
        else {
            category.products.push({
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock
            });
            category.save(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            });
        }});

});


router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/:id', function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;