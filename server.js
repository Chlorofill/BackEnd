const express = require('express');
const cors = require('cors');
const path=require('path');

const config = require('./config');
const { auth } = require('./routes/auth');
const { product } = require('./routes/product');
const {customer}=require('./routes/customer');



const db = require('./db')

const firestore = db.firestore();



const app = express();
app.use(express.json())






app.use(express.json());
app.use(cors());

app.use('/auth',auth)
app.use('/product',product)
app.use('/customer',customer)






app.listen(config.port, () => {console.log(`App is listening to port ${config.port}`)})