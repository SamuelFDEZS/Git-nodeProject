//const { generateSign } = require()
const { verifySign, generateSign } = require("../../utils/jwt")
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validator")
const User = require("../model/user.model")
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = generateSign(user.id, user.email)
        const tokenVerified = verifySign(token)

        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        
        console.log(token)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res) => {
    try {
        const newUser = new User(req.body)
        if (!validateEmail(newUser.email)) {
            return res.status(400).json({ message: "Invalid email" })
        }

        if (!validatePassword(newUser.password)) {
            return res.status(400).json({ message: "Invalid password" })
        }

        if ((await usedEmail(newUser.email)) > 0) {
            return res.status(400).json({ message: "Email already used" })
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save()
        return res.status(200).json(createdUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const checkSession = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const logoutUser = (req, res) => { };
module.exports = { login, register, getAllUsers, logoutUser, checkSession}