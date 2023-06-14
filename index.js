const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const {connection} = require("./src/utils/db")
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors)
connection()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server listening on port: " + PORT))