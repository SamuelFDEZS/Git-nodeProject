const jwt = require("jsonwebtoken")

const generateSign = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_KEY, { expiresIn: '1h' })
}

const verifySign = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}

const closeSesion = (token) => {
    const payload = jwt.decode(token);
    const tokenId = payload.jti;
    payload.exp = payload.iat;
    console.log(tokenId);
    return payload;
  };


const logout = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    //console.log(authorization);

    const close = closeSesion(token);
    console.log(close);
    if (!close.id) {
        return res.status(401).json(tokenVerified);
    }
};

module.exports = {generateSign, verifySign, closeSesion, logout}