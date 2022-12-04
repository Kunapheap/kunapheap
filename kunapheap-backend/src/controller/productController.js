const productService = require('../service/productService')

module.exports = productController = {
    getAllProducts : async (req,res) => {
        const products = await productService.getAllProduct()
        res.status(200).send(products)
    },
    getProduct : async (req,res) => {
        const product = await productService.getProduct(req.params.product_id)
        res.status(200).send(product)
    }
}