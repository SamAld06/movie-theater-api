const express = require("express")
const app = express()
const routes = require("../routes/index")

app.use("/users", routes.users)
app.use("/shows", routes.shows)

module.exports = app