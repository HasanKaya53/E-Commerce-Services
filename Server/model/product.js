
const products = [];
class Product
{
    constructor(ProductName, ProductDesc, ProductPrice, ProductDiscount, ProductImgList){
        this.ProductName = ProductName;
        this.ProductDesc = ProductDesc;
        this.ProductPrice = ProductPrice;
        this.ProductDiscount = ProductDiscount;
        this.ProductImgList = ProductImgList;
    }

    addProduct(){
        products.push(this);
    }


    static deleteFromName(name){
        for(let i = 0; i < products.length; i++){
            if(products[i].ProductName == name){
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