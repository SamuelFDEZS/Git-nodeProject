const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: yes},
    password: {type: String, required: yes}
},
{
    timestamps: true,
    collection: "users"
});

const User = mongoose.model('users', userSchema);
module.exports = User;