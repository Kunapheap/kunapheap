const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = itemService = {
    getColorByItem : async (product_id) => {
        const color = await prisma.item.findMany({
            include : {
                ColorOnSide : {
                    include : {
                        item : {
                            where : {
                                product_id : product_id
                            }
                        }
                    }
                }
            }
        })

        return color;
    
    },
    getAllItem : async () => {
        const items = await prisma.item.findMany({
            take : 20,
            orderBy : [
                {
                    product_id : 'asc'
                }
            ],
            include : {
                product : true,
                ColorOnSide : {
                    include : {
                        size : true,
                        color : true
                    }
                }
            }
        })
        return items;
    } 
}