const express = require("express")
const router = express.Router()
const {login, register, getAllUsers, logoutUser} = require("../controller/user.controller")
const {logout} = require("../../utils/jwt")
router.get("/", getAllUsers)
router.post("/register", register)
router.post('/login', login);
router.post('/logout', [logout], logoutUser);

module.exports = router;