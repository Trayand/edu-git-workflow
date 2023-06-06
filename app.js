const express = require('express')
const Controller = require('./controllers')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get("/", (request, response, next) => {
    response.json({message: "Aman gan"})
})

app.get("/register", Controller.register)

app.listen(3000, () => console.log("Jalan kok gan"))