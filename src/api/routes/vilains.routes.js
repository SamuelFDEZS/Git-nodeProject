const express = require("express")
const router = express.Router()
const {getVilains} = require("../controller/vilains.controller")

router.get("/", getVilains)

module.exports = router;