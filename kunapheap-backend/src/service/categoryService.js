const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function getAllCategory() {
    const category = await prisma.category.findMany()
    return category;
}

async function getACategory(category_name) {
    try{
        const category = await prisma.category.findFirst({
            where : {
                category_name : category_name
            }
        });
        return category;
    } catch(err) {
        console.log(err)
        return ;
    }
    
}


module.exports = {getAllCategory,getACategory}