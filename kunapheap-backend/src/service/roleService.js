const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function getRole (role) {
    try{
        const myRole = await prisma.role.findFirstOrThrow({
            where : {
                role_role : role.myRole 
            }
        })
        return myRole.role_id;
    } catch(err) {
        console.log(err)
        return;
    }
   
}

module.exports = {getRole}