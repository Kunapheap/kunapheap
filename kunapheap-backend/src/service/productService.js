const { PrismaClient } = require("@prisma/client");
const colorOnSizeService = require("./colorOnSizeService");
const prisma = new PrismaClient();

module.exports = productService = {
  getAllProduct: async () => {
    const products = await prisma.product.findMany({
      take: 10,
      include: {
        item: {
          include: {
            ColorOnSide: {
              include: {
                color: true,
                size: true,
              },
            },
            image : true
          },
        },
      },
    });
    return products;
  },

  getProduct: async (product_id) => {
    const product = await prisma.product.findUnique({
      where: {
        product_id: product_id,
      },
      include: {
        item: {
          include : {
            image : true
          }
        },
      },
    });

    const allProductColor = [];
    const allProductSize = [];

    product.item.map(async (item,index) => {
      allProductSize[index] = item.size_id
    })

    product.item.map((item, index) => {
      allProductColor[index] = item.color_id;
    });

    const filteredColor = allProductColor.filter((value, index, arr) => {
      return arr.indexOf(value) === index;
    });

    const filteredSize = allProductSize.filter((value, index, arr) => {
      return arr.indexOf(value) === index;
    });

    async function maping(color) {
      const colorWithSize = await colorOnSizeService.getColor(color);
      const size = [];
      colorWithSize.map(async (item,index) => {
        
        const temp_size = await colorOnSizeService.getSizeName(item.size_id); 
        var test ;
          filteredSize.map(async (size,index) => {
            if(item.size_id === size){
              console.log(item.size_id , size,item.size_id === size , temp_size)
              test = temp_size;
            }
          })
  
          size[index] = test;
      });

      // fix await at last one
      size[colorWithSize.length-1] = await colorOnSizeService.getSizeName(colorWithSize[colorWithSize.length -1].size_id)
      
      return {
        color: await colorOnSizeService.getColorName(color),
        size: size
      };
    }

    const colorOnSize = [];
    for (let i = 0; i < filteredColor.length; i++) {
      colorOnSize[i] = await maping(filteredColor[i]);
    }

    return {
      product,
      colorOnSize,
    };
  },
};
