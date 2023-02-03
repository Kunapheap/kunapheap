const router = require('express').Router()
const upload = require('../middleware/multer')
const itemController = require('../controller/itemController');
const imageController = require('../controller/imageController');

// router.get('/', (req,res) => {
//     return res.status(200).json({
//         msg : 'work'
//     })
// })

router.get('/allItems',itemController.getAllItem);
router.get('/getItem/:id',itemController.getItemById);
router.get('/getItemByCategory/:category',itemController.getItemByCategory);
router.post('/', itemController.createItem);
router.post('/update',itemController.updateItem);
router.get('/dashboard',itemController.itemDashboardData);
router.post('/image',
upload.single("image"),
itemController.createItemImage);
router.delete("/delete/:item_id",itemController.deleteItem);
router.get('/getImage/:item_id',imageController.getImageByItemId);


router.get('/allColor/:product_id',itemController.getColorByItem)

module.exports = router;