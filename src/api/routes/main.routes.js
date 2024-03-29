const express = require("express")
const router = express.Router()
const {getMain, createCharacter, updateCharacter, deleteCharacter} = require("../controller/main.controller")
const upload = require("../../middlewares/upload")

router.get("/", getMain)
router.post("/", createCharacter)
router.put("/:id", updateCharacter)
router.delete("/:id", deleteCharacter)

module.exports = router