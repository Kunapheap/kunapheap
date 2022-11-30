const { generateToken } = require("../middleware/jwtGenerate");
const { getRole } = require("../service/roleService");

const {
  getUsername,
  createUser,
  updateUserPassword,
  updateUserDetail,
  updateUserImage,
} = require("../service/userService");

async function loginAdmin(req, res) {
  const user = await getUsername(req.body.user_username);
  const role = await getRole({ myRole: "Admin" });

  if (user == undefined) {
    res.status(404).send({ msg: "invalid user" });
  }
  if (user) {
    console.log(user);
    if (user.role_id != role) {
      res.status(401).send({ msg: " Unauthorized" });
      return;
    } else if (user.user_password === req.body.user_password) {
      res.status(200).json(user);
      return;
    }
    res.status(403).send({ msg: "incorrect password" });
  }
}

async function logInUser(req, res) {
  const user = await getUsername(req.body.user_username);

  if (user == undefined) {
    res.status(404).send({ msg: "invalid user" });
  }
  if (user) {
    console.log(user);
    if (user.role_id != (await getRole({ myRole: "User" }))) {
      res.status(401).send({ msg: " Unauthorized" });
    } else if (user.user_password === req.body.user_password) {
      const token = generateToken(user.user_id);
      res.status(200).send({
        username: user.user_username,
        token: token,
      });
      return;
    }
    res.status(403).send({ msg: "incorrect password" });
  }
}

async function signUpUser(req, res) {
  try {
    var user = await createUser({
      user_firstname: req.body.user_firstname,
      user_lastname: req.body.user_lastname,
      user_username: req.body.user_username,
      user_password: req.body.user_password,
      user_gender: req.body.user_gender,
      user_phone_number: req.body.user_phone_number,
      user_email: req.body.user_email,
    });

    if (user.code == "P2002") {
      res.status(406).send({ msg: "username is taken ! " });
      return;
    }
  } catch (err) {}

  const token = generateToken(user.user_id);

  res.status(201).send({
    token: token,
    username: user.user_username,
  });
}

async function getUser(req, res) {
  try {
    const user = await getUsername(req.params.user_username);
    console.log(user);
    if (user == undefined) {
      res.status(404).send({
        msg: "invalid user",
      });
    }
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
}

async function resetPassword(req, res) {
  const username = req.body.username;
  const current_password = req.body.current_password;
  const new_password = req.body.new_password;
  try {
    const user = await updateUserPassword(
      username,
      new_password,
      current_password
    );
    if (user !== undefined) {
      res.status(200).send({ msg: "success" });
    } else {
      res.status(403).send({ msg: "worng password !" });
    }
  } catch (err) {
    console.log(err);
    return;
  }
}

async function updateUserImages(req, res) {
  try {
    console.log(req.body);
    console.log(req.file);
    const user = await updateUserImage(
      req.file.originalname,
      req.file.buffer,
      req.params.user_username
    );
    return res.status(200).send({
      msg : 'success'
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(req, res) {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone_number = req.body.phone_number;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await updateUserDetail(
      firstname,
      lastname,
      phone_number,
      email,
      username,
      password
    );
    return res.status(200).send({
      msg : 'success'
    });
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = {
  loginAdmin,
  logInUser,
  signUpUser,
  getUser,
  resetPassword,
  updateUser,
  updateUserImages,
};
