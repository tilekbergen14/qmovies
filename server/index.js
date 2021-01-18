const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

mongoose.connect("mongodb://localhost/qmovies", {useCreateIndex: true ,useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Succesfully connected to the database"))
    .catch((error) => console.log(error.message))
    
app.use(express.json())
app.use(cors())

const movies = require("./routes/movies")
const users = require("./routes/users")
const genres = require("./routes/genres")
const auth = require("./routes/auth")

app.use("/movies/", movies)
app.use("/users/", users)
app.use("/genres/", genres)
app.use("/auth/", auth)

app.listen(5000, console.log("Listening to port 5000..."))