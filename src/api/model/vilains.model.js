const mongoose = require("mongoose")

const Schema = mongoose.Schema()

const vilainsModel = newSchema({
    name: {type:String, required: true},
    franquicia: {type: String, required: true},
    juego_debut: {type: String, required: false},
    descripcion: {type: String, required: false},
    imagen: {type:String, required: true}
},

{
    collection: 'vilains'
})

const Vilains = mongoose.model("Vilains", vilainsModel);
module.exports = Vilains;