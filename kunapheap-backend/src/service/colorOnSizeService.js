const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = colorOnSizeService = {
    
    //not yet used
    getColor : async (product_id) => {
        const colors = await prisma.colorOnSize.findMany({
            include : {
                item : {
                    where : {
                        product_id : product_id
                    }
                }
            }
        })

        const myColor = [...colors]

        myColor.filter((color) => {
            console.log(color.item[0] !== undefined)
            if(color.item[0] !== undefined){
                return color
            }
            
        })
        console.log(myColor)
        return colors
    }
}