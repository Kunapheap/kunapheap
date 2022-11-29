const { PrismaClient } = require("@prisma/client");
const { putImageSingle } = require("./imageService");
const prisma = new PrismaClient();

const { getRole } = require("./roleService");

async function getUsername(user_username) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        user_username: user_username,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function updateUserPassword(username, new_password, curent_password) {
  try {
    const user = await getUsername(username);
    if (user.user_password === curent_password) {
      const user = await prisma.user.update({
        where: {
          user_username: username,
        },
        data: {
          user_password: new_password,
        },
      });
      return user;
    } else {
      console.log(user);
      return;
    }
  } catch (err) {
    console.log(err);
    return;
  }
}

async function updateUserImage (filename,buffer,username) {
  
  var img_link = await putImageSingle(filename,buffer);

  try{
    const user = await prisma.user.update({
      where : {
        user_username : username
      }, 
      data : { 
        user_image_link : img_link
      }
    })
    return user;
  } catch(err) {
    console.log(err)
  }

}

async function updateUserDetail(
  firstname,
  lastname,
  phone_number,
  email,
  username,
  password
) {

  try {
    const verifiedUser = await getUsername(username);
    if (verifiedUser.user_password === password) {
      const user = await prisma.user.update({
        where: {
          user_username: username,
        },
        data: {
          user_firstname: firstname,
          user_lastname: lastname,
          user_email: email,
          user_phone_number: phone_number,
        },
      });
      console.log(user);
      return user;
    } else {
      console.log(user);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function createUser(getUser) {
  const myRole = await getRole({ myRole: "User" });

  try {
    const user = await prisma.user.create({
      data: {
        user_firstname: getUser.user_firstname,
        user_lastname: getUser.user_lastname,
        user_username: getUser.user_username,
        user_password: getUser.user_password,
        user_gender: getUser.user_gender,
        user_phone_number: getUser.user_phone_number,
        user_email: getUser.user_email,
        user_image_link:
          "https://kunapheap.s3.ap-southeast-1.amazonaws.com/avatar.png",
        role: {
          connect: {
            role_id: myRole,
          },
        },
      },
    });
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = { getUsername, createUser, updateUserPassword,updateUserImage, updateUserDetail};
