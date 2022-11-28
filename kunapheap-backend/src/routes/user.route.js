const router = require('express').Router();
const auth = require('../middleware/auth')


const {signUpUser,logInUser,getUser,resetPassword} = require('../controller/userController')


router.post('/signup',signUpUser)
router.post('/login',logInUser)
router.get('/me/:user_username',auth,getUser)
router.post('/resetpassword',auth,resetPassword)

module.exports = router;