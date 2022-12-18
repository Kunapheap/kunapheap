const {getAllCategory,getACategory,getAllCategoryName} = require('../service/categoryService')


async function getAllCategories (req,res) {
    const all_categories = await getAllCategory()
    res.status(200).send(all_categories)
}

async function getCategory (req,res) {
    const category = await getACategory(req.params.category_name)
    return res.status(200).send(category)
}

async function getAllCategoryNameZin (req,res) {
    return res.status(200).send({msg : "hello"})
    const categories = await getAllCategoryName()
    return res.status(200).send(categories)
}

async function test (req,res) {
    return res.send({msg : 'work'})
}

module.exports = {getAllCategories,getCategory,getAllCategoryNameZin,test}