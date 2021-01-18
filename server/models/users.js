const { string } = require("joi")
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {type: String},
    email: {type: String, unique: true, trim: true},
    password: String,
    movies: [String],
    admin : {type: Boolean, default: false}
},{timestamps: true})

const Users = mongoose.model("User", schema)

module.exports = Users