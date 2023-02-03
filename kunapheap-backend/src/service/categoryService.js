const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const categoryService = {

    createCategory : async (category_name) => {
        try{
            const category = await prisma.category.create(
                {
                    data : {
                        category_name : category_name
                    }
                }
            )
            console.log(category)
            return category;
        }catch(err){
            console.log(err)
        } 
    }
}

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
    });

   

     return category
    
    // return category;
}

async function getACategory(category_name) {
    
    try{
        const category = await prisma.category.findFirst({
            where : {
                category_name : category_name,
            },  

            include : {
                product : true
            }
            
        });
        return category;
    } catch(err) {
        console.log(err)
        return ;
    }
    
}

async function getAllCategoryName () {
    const categories = await prisma.category.findMany({
        take : 5
    })
    return categories;
}


module.exports = {getAllCategory,getACategory,getAllCategoryName,categoryService}