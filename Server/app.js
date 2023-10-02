//process.env.TERM
const env = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const productController = require('./controller/productController'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/products', productController.router);







app.listen(process.env.PORT, () => {console.log('Server Start At '+process.env.PORT);});




