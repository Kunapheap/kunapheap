const router = require('express').Router();
const colorOnSizeController = require('../controller/colorOnSizeController')

router.get('/', async (req, res, next) => {
    res.send({ message: 'Ok api is working 🚀' });
});

router.get('/color/:product_id',colorOnSizeController.getColor)
router.get('/allSize',colorOnSizeController.getAllSize)

module.exports = router;