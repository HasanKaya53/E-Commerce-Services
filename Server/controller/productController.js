const express = require('express');
const router = express.Router();

let product = require('../model/product');


router.post('/newProduct', (req,res)=>{

    let newProduct = new product(req.body.ProductName, req.body.ProductDesc, req.body.ProductPrice, req.body.ProductDiscount, req.body.ProductImgList);
    newProduct.addProduct();
    res.status(200).send("Product Added");
})


router.post('/getAll',(req,res)=>{
    res.send(product.getAllProducts());
});


router.post('/deleteProduct',(req,res)=>{
    let name = req.res.ProductName;
    if(product.deleteFromName(name)){
        res.status(200).send("Product Deleted");
    }
    else{
        res.status(400).send("Product Not Found");
    }
});





module.exports.router = router;