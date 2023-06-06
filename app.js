const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get("/", (request, response, next) => {
    response.json({message: "Aman gan"})
})

app.listen(3000, () => console.log("Jalan kok gan"))