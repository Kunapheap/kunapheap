const productService = require('../service/productService')

module.exports = productController = {
    getSearchProduct : async (req,res) => {
        const product = await productService.searchProduct(req.params.product_name);
        return res.status(200).send(product);
    },
    getAllProducts : async (req,res) => {
        const products = await productService.getAllProduct();
        return res.status(200).send(products)
    },
    getProduct : async (req,res) => {
        const products = await productService.getProduct(req.params.product_id)
        return res.status(200).send(products)
    },
    getNewArrivalProduct : async (req,res) => {
        const products = await productService.getNewArrival()
        return res.status(200).send(products);
    },
    getNewArrivalPage : async (req,res) => {
        const products = await productService.getNewArrivalPage()
        return res.status(200).send(products)
    }
}