const router = require("express").Router();
const {getAllCategories,getCategory} = require('../controller/categoryController')


router.get('/', async (req, res, next) => {
    res.send({ message: 'Ok api is working 🚀' });
});

router.get('/allcategory',getAllCategories)
router.get('/:category_name',getCategory)

module.exports = router;