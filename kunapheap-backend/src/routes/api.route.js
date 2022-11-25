const router = require('express').Router();
const {loginAdmin} = require('../controller/userController')

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/login',loginAdmin)


module.exports = router;
