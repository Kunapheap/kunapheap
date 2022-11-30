const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  signUpUser,
  logInUser,
  getUser,
  resetPassword,
  updateUser,
  updateUserImages,
} = require("../controller/userController");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/signup", signUpUser);
router.post("/login", logInUser);
router.get("/me/:user_username", auth, getUser);
router.post("/resetpassword", auth, resetPassword);
router.post("/updateuser", auth, updateUser);
router.post(
  "/updateUserImages/:user_username",
  auth,
  upload.single('image'),
  updateUserImages
);

module.exports = router;
