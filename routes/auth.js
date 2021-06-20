const express=require('express');
const {create,signin}=require('../controllers/auth-controller')

const auth = new express.Router();

auth.post('/signup', create);
auth.post('/signin', signin);




module.exports = { auth };