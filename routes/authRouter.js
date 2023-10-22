const router = require("express").Router();
const { login, register, getAllUsers } = require("../controllers/auth");
const {
  authorize,
  authorizePermissions,
} = require("../middlewares/authorization");

router.post("/register", register);
router.post("/login", login);
router.get("/all_users", authorize, authorizePermissions("admin"), getAllUsers);

module.exports = router;
