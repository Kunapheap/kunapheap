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
          
    },

    updateItem : async (product_id,product_name,product_price,product_discount) => {
        const product = await prisma.product.update({
            where : {
                product_id : product_id
            },
            data : {
                product_name : product_name,
                product_discount : product_discount,
                product_price : product_price
            }
        })
        return product;
    },
    itemDashboardData : async () => {

        const category = await prisma.category.findMany();

        const outStockItem = await prisma.item.findMany({

            where : {
                item_amount : 0
            }
            
        })

        const categories_amout = [];
        for(let j=0;j<category.length;j++) {
    
            const products = await prisma.product.findMany({
                where : {
                    category_id : category[j].category_id
                }
            })
        
            var sum = 0;
            for(let i=0;i<products.length;i++) {
                const item = await prisma.item.findMany({
                    where : {
                        product_id : products[i].product_id
                    }
                })
                const arrAmout = item.map(i => i.item_amount);
                let temp = arrAmout.reduce((total,value) => total+value)
                sum = sum + temp
            }
            categories_amout[j] = sum;
        }

        const Amout_item_in_stock = categories_amout.reduce((total,value) => total += value)

        return {
            "categories_amout" : categories_amout,
            "out_stock_item" : outStockItem.length,
            "Amout_item_in_stock" : Amout_item_in_stock
        }
    },
    deleteItem : async (item_id) => {
        const item = await prisma.item.delete({
            where : {
                item_id : item_id
            }
        })
    }
}