const express=require('express');
const {addcustomer}=require('../controllers/customer-controller')

const customer = new express.Router();


customer.post('/profile', addcustomer);




module.exports = { customer};