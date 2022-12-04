const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports =  productService = {
    getAllProduct : async () => {
        const products = await prisma.product.findMany({    
            take : 10,
            include : {
                image : true,
                item : {
                    include : {
                        ColorOnSide : {
                            include : {
                                color : true,
                                size : true
                            }
                        }
                    }
                }
            }
        })
        return products;
    },

    getProduct : async (product_id) => {
        const product = await prisma.product.findUnique({
            where : {
                product_id : product_id
            },
            include : {
                item : true
            }
        })

        return product;
    }

}