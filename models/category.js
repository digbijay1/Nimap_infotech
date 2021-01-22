var mongoose = require('mongoose');
var Product = require('../models/Product.js');

var Schema = mongoose.Schema;
var CategorySchema = new Schema({
  name      		: { type: String, required: true}
  , description    :  { type: String, required: true }
  , products         : [Product.schema]
});

module.exports = mongoose.model('Category', CategorySchema);