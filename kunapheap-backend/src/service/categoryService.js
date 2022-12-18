const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


async function getAllCategory() {
    const category = await prisma.category.findMany({
        include : {
            product : {
                include : {
                    item : {
                        take : 1,
                        include : {
                            image : true
                        }
                    }
                }
            }
        }
    })
    return category;
}

async function getACategory(category_name) {
    
    try{
        const category = await prisma.category.findFirst({
            where : {
                category_name : category_name,
            },  

            include : {
                product : {
                    include : {
                        image : true
                    }
                }
            }
            
        });
        return category;
    } catch(err) {
        console.log(err)
        return ;
    }
    
}

async function getAllCategoryName () {
    console.log('work')
    const categories = await prisma.category.findMany({
        take : 5
    })
    console.log(categories)
    return categories;
}


module.exports = {getAllCategory,getACategory,getAllCategoryName}