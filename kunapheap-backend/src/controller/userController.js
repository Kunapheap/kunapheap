const {getUsername} = require('../service/userService')

async function userLogin(req, res) {
  const user = await getUsername(req.body.user_username);

  if(user == undefined) {
    res.status(404).send({msg : "invalid user"})
  }
  if (user) {
    console.log(user)
    if(user.role_id != 'e1d257a1-83a9-465a-9cc8-c32ad5e8dd43')
    {
        res.status(401).send({msg : ' Unauthorized'})
    }
    else if (user.user_password === req.body.user_password) {
      res.status(200).send(user);
      return;
    }res.status(403).send({ msg: "incorrect password" });
  }
  
}

module.exports = { userLogin };
