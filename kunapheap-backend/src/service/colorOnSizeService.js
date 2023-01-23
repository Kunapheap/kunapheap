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
  },
  getAllSize : async () => {

    return await prisma.size.findMany();
     
  },
  getSizeId : async (size_name) => {
    try {
      const size = await prisma.size.findFirstOrThrow({
        where : {
          size_name : size_name
        }
      })
      return size.size_id;
    } catch (err) {
      console.log(err)
    }
  },
  getColorId : async (color_name) => {
    try{
      const color = await prisma.color.findFirstOrThrow({
        where : {
          color_name : color_name
        }
      })
      return color.color_id;
    }catch(err) {
      console.log(err)
    }
  },
  createColor : async (color_name) => {
    const color = await prisma.color.create({
      data : {
        color_name : color_name
      }
    })
    console.log(color)
    return color.color_id
  },
  isConnectedColorOnSize : async (size_id,color_id) => {
    try {
      const isConnected = await prisma.colorOnSize.findUnique({
        where : {
          color_id_size_id : {
            color_id : color_id,
            size_id : size_id
          }
        }
      })

      console.log(isConnected)
      return isConnected;
    } catch (err) {
      console.log(err)
    }
  },
  connectColorOnSize : async (size_id,color_id) => {
    try {
      const colorOnSize = await prisma.colorOnSize.create({
        data : {
          color_id : color_id,
          size_id : size_id
        }
      })
      return colorOnSize
    } catch(err){
      console.log(err)
    }
  } 
};
