const express = require("express")
const router = express.Router()
const Movies = require("../models/movies")
const Joi = require("joi")
const { func } = require("joi")

router.get("/", (req, res) => {
    Movies.find().sort("-createdAt")
        .then(result => res.json(result))
        .catch(error => res.status(400).json(error.message))
})

router.get("/:id", async (req, res) => {
    const movie = await Movies.findById(req.params.id)
    if(!movie) return res.status(400).json(error.message)
    res.json(movie)
})

router.post("/", (req, res) => {
    const {error} = schema.validate(req.body)
    if(error) return res.status(400).json(error.message)
    const {name, year, genre, description, type, rating, slug, language, subs, comment} = req.body
    const movie = new Movies({
        name: name,
        year: year,
        genre: genre,
        description: description,
        type: type,
        rating: rating,
        slug: slug,
        language: language,
        subs: subs,
        comment: comment
    })
    movie.save()
        .then(result => res.json("Movie " + name + " added succesfully"))
        .catch(error => res.status(400).json(error.message))
})

router.delete("/:id", async (req, res) => {
    const movie = await Movies.findByIdAndDelete(req.params.id)
    if(!movie) return res.status(400).json("Couldn't find movie")
    res.json(movie.name+" deleted succesfully")
})

router.put("/:id", async (req, res) => {
    const movieExist = await Movies.findById(req.params.id)
    if(!movieExist)return res.status(400).json("Couldn't find movie")
    const {error} = schema.validate(req.body)
    if(error) return res.status(400).json(error.message)
    const {name, year, genre, description, type, rating, slug, language, subs, comment} = req.body
    const movie = new Movies({
        name: name,
        year: year,
        genre: genre,
        description: description,
        type: type,
        rating: rating,
        slug: slug,
        language: language,
        subs: subs,
        comment: comment
    })
    movie.save()
        .then(() => res.json("Movie " + name + " updated succesfully"))
        .catch(error => res.status(400).json(error.message))
})

const schema = Joi.object({
    name: Joi.string()
        .max(30)
        .required(),
    year: Joi.number(),
    genre: Joi.array(),
    description: Joi.string(),
    type: Joi.string(),
    rating: Joi.array(),
    slug: Joi.string().required(),
    language: Joi.string(),
    subs: Joi.array(),
    comment: Joi.array()
})

module.exports = router