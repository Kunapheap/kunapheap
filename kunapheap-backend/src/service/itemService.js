const {PrismaClient} = require('@prisma/client')
const {imageService} = require('../service/imageService')
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

    getItemByCategory : async (category_id) => {
        
        const product = await prisma.product.findMany({
            where : {
                category_id : category_id
            }
        })

        let result = [];

        for(let i=0;i<product.length;i++) {
            let items = await prisma.item.findMany({
                where : {
                    product_id : product[i].product_id
                },
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
            result = [...result,...items]
        }

        return result;
    },
    getItemById : async (id) => {
        const item = await prisma.item.findUniqueOrThrow({
            where : {
                item_id : id
            },

            include : {
                product : true,
                image : true,
                ColorOnSide : {
                    include : {
                        size : true,
                        color : true,
                    }
                }
            }
        })
        return item;
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
    },
    createItemImage : async (filename,buffer) => {
        return imageService.putImageSingle(filename,buffer)
    },

    createItem : async (product_id,colorOnSide,item_amount) => {

        try {
            const item = prisma.item.create({
                data : {
                   item_amount : parseInt(item_amount),
                   product : {
                       connect : {
                           product_id : product_id
                       }
                   },
                   ColorOnSide : {
                       connect : {
                           color_id_size_id : {
                               color_id : colorOnSide.color_id,
                               size_id : colorOnSide.size_id
                           }
                       }
                   }
                },
               })
               return item
        } catch (err) {
            console.log(err)
        }
          
    }
}