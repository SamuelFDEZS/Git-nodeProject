const mongoose = require("mongoose")

const Schema = mongoose.Schema

const mainCharactersModel = new Schema({
    nombre: {type:String, required: true},
    franquicia: {type: String, required: true},
    juego_debut: {type: String, required: false},
    descripcion: {type: String, required: false},
    vilains: [{type: Schema.Types.ObjectId, ref: "vilains"}],
    imagen: {type:String, required: true},
},

{
    collection: 'principals'
})

const Main = mongoose.model("Main", mainCharactersModel);
module.exports = Main;