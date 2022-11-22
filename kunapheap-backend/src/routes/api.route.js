const router = require('express').Router();
const {userLogin} = require('../controller/userController')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/login',userLogin)

module.exports = router;
