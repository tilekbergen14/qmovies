const mongoose = require("mongoose")

const Genres = mongoose.model("Genre", new mongoose.Schema({
    name: {type: String, unique: true, trim:true, required: true}
}))

module.exports = Genres