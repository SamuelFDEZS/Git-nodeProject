const mongoose = require("mongoose")
const Main = require("../model/main.model")

const getMain = async(req, res) => {
    try {
        const mainCharacters = await Main.find().populate({path: "vilains", select: "nombre descripcion imagen"})
        return res.status(200).json(mainCharacters)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getMain}
