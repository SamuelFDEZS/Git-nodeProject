const vilains = require("../model/vilains.model")
const mongoose= require("mongoose")

const getVilains = async (req, res) => {
    try {
        const allVilains = await vilains.find();
        return res.status(200).json(allVilains)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getVilains}