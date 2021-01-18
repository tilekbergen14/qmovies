const express = require("express")
const router = express.Router()
const Users = require("../models/Users")
const Joi = require("joi")
const _ = require("lodash")
const bcrypt = require("bcrypt")

const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string()
})

router.post("/", async (req, res) => {
    const {error} = schema.validate(req.body)
    if(error) return res.status(400).json(error.message)

    let user = await Users.findOne({email: req.body.email})
    if(!user) return res.status(400).json("Couldn't find user with given email!")

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).json("Invalid password!")
    res.send(_.pick(user, ["_id", "username", "email"]))
})

module.exports = router