const express = require("express")
const router = express.Router()
const Genres = require("../models/Genres")

router.get("/", (req, res) => {
    Genres.find().sort("-createdAt")
        .then(result => res.json(result))
        .catch(error => res.status(400).json(error.message))
})

router.get("/:id", async (req, res) => {
    const genre = await Genres.findById(req.params.id)
    if(!genre) return res.status(400).json(error.message)
    res.json(genre)
})

router.post("/", (req, res) => {
    const genre = new Genres({
        name: req.body.name
    })
    genre.save()
        .then(() => res.json("genre " + genre.name + " added succesfully"))
        .catch(error => res.status(400).json(error.message))
})

router.delete("/:id", async (req, res) => {
    const genre = await Genres.findByIdAndDelete(req.params.id)
    if(!genre) return res.status(400).json("Couldn't find genre")
    res.json(genre.name+" deleted succesfully")
})

module.exports = router