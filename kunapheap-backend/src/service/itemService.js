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
    
    }
}