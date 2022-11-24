const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const {getRole} = require('./roleService')

async function getUsername(user_username) {
    try{
        const user = await prisma.user.findUniqueOrThrow({
            where : {
                user_username : user_username,
            }
        })
        return user

    } catch (err) {
        console.log(err)
    }
    
}

async function createUser (getUser) {

    const myRole = await getRole({myRole : "User"})

    try{
        const user = await prisma.user.create({
            data : {
                user_firstname : getUser.user_firstname,
                user_lastname : getUser.user_lastname,
                user_username : getUser.user_username,
                user_password : getUser.user_password,
                user_gender: getUser.user_gender,
                user_phone_number : getUser.user_phone_number,
                user_email : getUser.user_email,
                user_image_link : "https://kunapheap.s3.ap-southeast-1.amazonaws.com/avatar.png",
                role : {
                    connect : {
                        role_id : myRole,
                    }
                }
            }
        })
        return user;
    } catch (err) {
        console.log(err)
        return err;
    }
}


module.exports = {getUsername,createUser}

