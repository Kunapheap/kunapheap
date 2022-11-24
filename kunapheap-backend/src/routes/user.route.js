const router = require('express').Router();
const auth = require('../middleware/auth')


const {signUpUser,logInUser,getUser} = require('../controller/userController')


router.post('/signup',signUpUser)
router.post('/login',logInUser)
router.get('/me/:user_username',auth,getUser)

module.exports = router;