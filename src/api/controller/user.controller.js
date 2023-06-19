const { generateSign } = require("../../../../../Dayana repo/Node-JS/Sesion-5-userAuth/src/utils/jwt")
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validator")
const User = require("../model/user.model")
const bcrypt = require("bcrypt")


const login = async(req, res) =>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(400).json({message: "Invalid password"})
        }
        const token = generateSign(user.id, user.email)
        console.log(token)
        return res.status(200).json({message: "User logged in successfully"}, user, token)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async(req, res) => {
    try {
        const newUser = new User(req.body)
        if(!validateEmail(newUser.email)){
            return res.status(400).json({message: "Invalid email"})
        }

        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: "Invalid password"})
        }

        if(usedEmail(newUser.email) > 0){
            return res.status(400).json({message: "Email already used"})
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10);
        await newUser.save()
        return res.status(200).json({message: "User created successfully"})
    } catch (error) {
        return res.status(500).json(error)
    }
}

