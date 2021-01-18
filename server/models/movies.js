const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true, trim: true, maxLength: 50, unique : true},
    year: Number,
    genre: [String],
    description: String,
    type: String,
    rating: [Number],
    slug: {type: String, unique : true, trim: true},
    language: String,
    subs: [String],
    comment: [{
        type: String, 
        likes: 0
    }]
},{timestamps: true})

const Movies = mongoose.model("Movie", schema)

module.exports = Movies