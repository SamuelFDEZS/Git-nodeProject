const express = require("express")
const dotenv = require("dotenv")
const { connection } = require("./src/utils/db")
const cloudinary = require("cloudinary").v2;
const routerMain = require("./src/api/routes/main.routes")
const routerVilains = require("./src/api/routes/vilains.routes")
const routerUser = require("./src/api/routes/user.routes")
const cors = require("cors")

const app = express()
app.use(cors())
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(express.json())
connection()

const PORT = process.env.PORT || 5000

app.use("/mainCharacters", routerMain)
app.use("/vilains", routerVilains)
app.use("/users", routerUser)
app.listen(PORT, () => console.log("Server listening on port: " + PORT))