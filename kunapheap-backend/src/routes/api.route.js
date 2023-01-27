const router = require('express').Router();
const {loginAdmin , getUser} = require('../controller/userController');
const auth = require("../middleware/auth");

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/login',loginAdmin);
router.get('/:user_username',auth,getUser);


module.exports = router;
