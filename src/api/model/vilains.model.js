const mongoose = require("mongoose")

const Schema = mongoose.Schema

const vilainsModel = new Schema({
    nombre: {type:String, required: true},
    franquicia: {type: String, required: true},
    juego_debut: {type: String, required: false},
    descripcion: {type: String, required: false},
    imagen: {type:String, required: true}
},

{
    collection: 'vilains'
})

const vilains = mongoose.model("vilains", vilainsModel);
module.exports = vilains;