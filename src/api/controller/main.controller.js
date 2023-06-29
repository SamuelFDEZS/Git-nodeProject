const mongoose = require("mongoose")
const Main = require("../model/main.model")

const getMain = async (req, res) => {
    try {
        const mainCharacters = await Main.find().populate({ path: "vilains", select: "nombre descripcion imagen" })
        return res.status(200).json(mainCharacters)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const createCharacter = async (req, res) => {
    try {
        const newCharacter = new Main(req.body)

        if (req.file && req.file.path) {
            newCharacter.imagen = req.file.path;
        } else {
            newCharacter.imagen = newCharacter.imagen;
        }
        const createdCharacter = await newCharacter.save()
        return res.status(200).json(createdCharacter);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const newCharacter = new Main(req.body)
        newCharacter._id = id
        const updChar = await Main.findByIdAndUpdate(id, newCharacter, {
            new: true
        })
        return res.status(200).json(updChar)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params
        const delCharacter = await Main.findByIdAndDelete(id);
        if (!delCharacter) {
            return res.status(404).json({ message: "Persona no encontrada" })
        }
        return res.status(200).json(delCharacter)
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = { getMain, createCharacter, updateCharacter, deleteCharacter };