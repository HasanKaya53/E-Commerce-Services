
const products = [];
class Product
{
    constructor(ProductName, ProductDesc, ProductPrice, ProductDiscount, ProductImgList,ProductStockQuantity){
        this.ProductName = ProductName;
        this.ProductDesc = ProductDesc;
        this.ProductPrice = ProductPrice;
        this.ProductDiscount = ProductDiscount;
        this.ProductStockQuantity = ProductStockQuantity;
        this.ProductImgList = ProductImgList;
    }

    addProduct(){

        //if exits product with same name, return false
        for(let i = 0; i < products.length; i++){
            if(products[i].ProductName.toLowerCase() == this.ProductName.toLowerCase()){
                return false;
            }
        }

        products.push(this);
        return true;
    }


    static deleteFromName(name){
        for(let i = 0; i < products.length; i++){
            // if exits product with same name, delete it and return true
            if(products[i].ProductName.toLowerCase() == name.toLowerCase()){
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static getAllProducts(){
        return products;
    }

}

module.exports = Product;