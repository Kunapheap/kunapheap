const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const S3 = require("../config/s3Sevice");

require("dotenv").config();

const imageService = {

  putImageSingle: (filename, buffer) => {

    let str = filename;
    str = str.replace(/ +/g, "");

    const bucket_params = {
      Bucket: process.env.BUCKET_NAME,
      Key: str,
      Body: buffer,
    };

    try {
      S3.send(new PutObjectCommand(bucket_params), (err, data) => {
        if (err) console.log(err);
        else console.log(data);
      });
    } catch (err) {
      console.log(err);
    }

    const link = `https://kunapheap.s3.ap-southeast-1.amazonaws.com/${str}`;

    return link;
  },
  createImage : async (link,item_id) => {
    try {
      const image = await prisma.image.create({
        data : {
          image_link : link,
          item : {
            connect : {
              item_id : item_id
            }
          }
        }
      })
    return image;
    }catch(err) {
      console.log(err)
    }
    
  }

};

async function putImageSingle(filename, buffer) {
  let str = filename;
  str = str.replace(/ +/g, "");

  const bucket_params = {
    Bucket: process.env.BUCKET_NAME,
    Key: str,
    Body: buffer,
  };

  try {
    S3.send(new PutObjectCommand(bucket_params), (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
  } catch (err) {
    console.log(err);
  }

  const link = `https://kunapheap.s3.ap-southeast-1.amazonaws.com/${str}`;

  return link;
}

module.exports = { putImageSingle,imageService };
