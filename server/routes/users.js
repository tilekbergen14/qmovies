const express = require("express")
const router = express.Router()
const Users = require("../models/Users")
const Joi = require("joi")
const _ = require("lodash")
const bcrypt = require("bcrypt")
const { valid } = require("joi")

const schema = Joi.object({
    username: Joi.string().required().max(30),
    email: Joi.string().email(),
    password: Joi.string(),
    admin: Joi.boolean(),
    movies: Joi.array()
})

router.post("/", async (req, res) => {
    const {error} = schema.validate(req.body)
    if(error) return res.status(400).json(error.message)

    let user = await Users.findOne({email: req.body.email})
    if(user) return res.status(400).send("User already registered by this email!")

    user = new Users(_.pick(req.body, ["username", "email", "password", "admin", "movies"]))
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()
        .then((user) => res.json(_.pick(user, ["_id", "username", "email"])))
        .catch(error => res.status(400).json(error))
})

module.exports = router