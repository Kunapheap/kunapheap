const router = require('express').Router()

const itemController = require('../controller/itemController')

router.get('/', (req,res) => {
    return res.status(200).json({
        msg : 'work'
    })
})

router.get('/allColor/:product_id',itemController.getColorByItem)

module.exports = router;