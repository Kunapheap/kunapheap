const router = require('express').Router()
const upload = require('../middleware/multer')
const itemController = require('../controller/itemController')

// router.get('/', (req,res) => {
//     return res.status(200).json({
//         msg : 'work'
//     })
// })

router.get('/allItems',itemController.getAllItem);
router.post('/', itemController.createItem);
router.post('/image',
upload.single("image"),
itemController.createItemImage);

router.get('/allColor/:product_id',itemController.getColorByItem)

module.exports = router;