const express = require('express')
const Controller = require('./controllers')
const app = express()
const PORT = 3000

const Controller = require('./controllers');

app.use(express.urlencoded({extended: true}))

app.get("/", (request, response, next) => {
    response.json({message: "Aman gan"})
})
app.get("/coba", Controller.coba)

app.get("/register", Controller.register)
app.post("/login", Controller.login)

app.listen(PORT, () => console.log("App running on port", PORT))
