const router = require("express").Router();
const productController = require('../controller/productController');

router.get('/',(req,res) => {
    res.status(200).send({msg : 'work'})
})

router.get('/getAllProduct',productController.getAllProducts);
router.get('/product_id/:product_id',productController.getProduct)

module.exports = router;

