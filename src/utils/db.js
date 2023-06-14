const mongoose = require("mongoose")

const connection = async() => {
    try {
        const db = await mongoose.connect(process.env.DB_URL)
        const {name, host} = db.connection
        console.log(`Successfully connected to host ${host} with name ${name}`)
    } catch (error) {
        console.log(`An eror has ocurred ${error}`)
    }
}

module.exports = {connection}