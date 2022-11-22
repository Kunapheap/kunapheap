const { getUsername } = require("../service/userService");

async function userLogin(req, res) {
  const user = await getUsername(req.body.user_username);

  if(user == undefined) {
    res.status(404).send({msg : "invalid user"})
  }
  if (user) {
    if(user.role_id != '0675710b-cbfa-46da-b276-1215d1ec8b91')
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
