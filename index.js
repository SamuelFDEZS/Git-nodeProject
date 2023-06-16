const express = require("express")
const dotenv = require("dotenv")
const {connection} = require("./src/utils/db")
const routerMain = require("./src/api/routes/main.routes")
const routerVilains = require("./src/api/routes/vilains.routes")

const app = express()
dotenv.config()
app.use(express.json())
connection()
const PORT = process.env.PORT || 5000

app.use("/mainCharacters", routerMain)
app.use("/vilains", routerVilains)

app.listen(PORT, () => console.log("Server listening on port: " + PORT))