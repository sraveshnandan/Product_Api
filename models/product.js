const mongoose = require('mongoose');

//Creating Schema for product
const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number},
    category:{type:String, required:true},
    description: {type:String, required:true}
  });
  
  const product = mongoose.model('product', productSchema);

module.exports= product;