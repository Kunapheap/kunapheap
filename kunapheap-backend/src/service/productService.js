const { PrismaClient } = require("@prisma/client");
const colorOnSizeService = require("./colorOnSizeService");
const prisma = new PrismaClient();

module.exports = productService = {
  getAllProduct: async () => {
    const products = await prisma.product.findMany({
      take: 10,
      include: {
        image: true,
        item: {
          include: {
            ColorOnSide: {
              include: {
                color: true,
                size: true,
              },
            },
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
        item: true,
        image : true
      },
    });

    const allProductColor = [];

    product.item.map((item, index) => {
      allProductColor[index] = item.color_id;
    });

    const filteredColor = allProductColor.filter((value, index, arr) => {
      return arr.indexOf(value) === index;
    });

    async function maping(color) {
      const colorWithSize = await colorOnSizeService.getColor(color);
      const size = [];
      colorWithSize.map(async (item, index) => {
          size[index] = await colorOnSizeService.getSizeName(item.size_id); 
      });

      //fix await at last one
      size[colorWithSize.length-1] = await colorOnSizeService.getSizeName(colorWithSize[colorWithSize.length -1].size_id)
      return {
        color: await colorOnSizeService.getColorName(color),
        size: size,
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
