const {getAllCategory,getACategory} = require('../service/categoryService')


async function getAllCategories (req,res) {
    const all_categories = await getAllCategory()
    res.status(200).send(all_categories)
}

async function getCategory (req,res) {
    const category = await getACategory(req.params.category_name)
    return res.status(200).send(category)
}

module.exports = {getAllCategories,getCategory}