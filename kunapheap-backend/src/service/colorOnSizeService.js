const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = colorOnSizeService = {
  //not yet used
  getColor: async (color) => {
    const colorWithSize = await prisma.colorOnSize.findMany({
      where: {
        color_id: color,
      },
    });
    return colorWithSize;
  },
  getColorName : async (color_id) => {
    const color = await prisma.color.findUnique({
      where : {
        color_id : color_id
      }
    })
    return color.color_name;
  },
  getSizeName : async (size_id) => {
    const size = await prisma.size.findUnique({
      where : {
        size_id : size_id,
      }
    })
    // return size;
    return size.size_name;
  }
};
