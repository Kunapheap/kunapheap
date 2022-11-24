const jwt = require('jsonwebtoken')


function generateToken (user_id) {

    const payload = {
        user : user_id
    }

    return jwt.sign(payload,process.env.JWT_Secret,{
        expiresIn : '30d'
    })

}

module.exports = {generateToken}