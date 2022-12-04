const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = cartService = {
    createCart : async (user_id,item_id) => {
        try{
            const cart = await prisma.cart.create({
                data : {
                   
                }
            })
            console.log(cart)
            return;
        } catch (err) {
            console.log(err);
            return;
        }
    }
}