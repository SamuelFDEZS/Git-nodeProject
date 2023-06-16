const express = require("express")
const router = express.Router()
const {getMain} = require("../controller/main.controller")

router.get("/", getMain)
module.exports = router