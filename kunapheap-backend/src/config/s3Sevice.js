const {S3Client} = require('@aws-sdk/client-s3')
require('dotenv').config

const S3 = new S3Client({
    region: "ap-southeast-1",
    credentials : {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRETE_ACCESS_KEY
    }
})

module.exports = S3