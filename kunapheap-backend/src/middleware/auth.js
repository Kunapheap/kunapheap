const jwt = require('jsonwebtoken');
const { token } = require('morgan');

module.exports = async (req,res,next) => {
    try{
        const jwtToken = req.get('authorization');
        if(jwtToken == undefined) {
            return res.status(403).json({
                success : 0,
                message : "invalid token !" 
            })
        }

        const payload = jwt.verify(jwtToken.slice(7),process.env.JWT_Secret);
        console.log(payload.user)
        if(payload != undefined) {
            next()
        } else {
            return res.status(403).json({
                success : 0,
                message : "token expire !"
            })
        }
        res.user = payload.user;

    } catch(err) {
        return res.status(401).json({
            success : 0,
            message : "Unauthization ....."
        })
    }
}