const {getAllCategory,getACategory,getAllCategoryName,categoryService} = require('../service/categoryService');
const itemService = require('../service/itemService');

const categoryController = {
    createCategory : async (req,res) => {
       const category_name = req.body.category_name
       console.log(category_name)
       const category = await categoryService.createCategory(category_name);
       return res.status(201).send({
        msg : "success",
        category : category
       })
    }
}

async function getAllCategories (req,res) {
    const all_categories = await getAllCategory()
    res.status(200).send(all_categories)
}

async function getCategory (req,res) {
    const category = await getACategory(req.params.category_name)
    return res.status(200).send(category)
}


async function test (req,res) {
    return res.send({msg : 'work'})
}

module.exports = {getAllCategories,getCategory,test,categoryController}