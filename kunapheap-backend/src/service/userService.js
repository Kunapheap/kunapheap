const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


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


module.exports = {getUsername}

