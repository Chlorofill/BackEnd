const express=require('express');
const {addproduct,editproduct,deleteproduct,viewproduct}=require('../controllers/product-controller')

const product = new express.Router();


product.post('/addproduct', addproduct);
product.post('/editproduct', editproduct);
product.post('/deleteproduct', deleteproduct);
product.post('/viewproduct', viewproduct);



module.exports = { product};