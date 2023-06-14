const mongoose = require("mongoose")

const Schema = mongoose.Schema()

const mainCharactersModel = newSchema({
    name: {type:String, required: true},
    franquicia: {type: String, required: true},
    juego_debut: {type: String, required: false},
    descripcion: {type: String, required: false},
    imagen: {type:String, required: true},
    vilains: [{type: Schema.Types.ObjectId, ref: "vilains"}]
},

{
    timestamps:true,
    collection: 'principals'
})

const Main = mongoose.model("Main", mainCharactersModel);
module.exports = Main;