const productService = require('../service/productService')

module.exports = productController = {
    getAllProducts : async (req,res) => {
        const products = await productService.getAllProduct()
        res.status(200).send(products)
    },
    getProduct : async (req,res) => {
        const products = await productService.getProduct(req.params.product_id)
        res.status(200).send(products)
    },
    getNewArrivalProduct : async (req,res) => {
        const products = await productService.getNewArrival()
        res.status(200).send(products);
    },
    getNewArrivalPage : async (req,res) => {
        const products = await productService.getNewArrivalPage()
        res.status(200).send(products)
    }
}