const{Router} = require("express")
const router = Router()
const{User, Show} = require("../models/index")
const{check, validationResult, matchedData} = require("express-validator")

router.get("/users", async function (req,res) {
    const users = await User.findAll()
    res.json(users)
})

router.get("/users/:id", async function (req, res) {
    const user = await User.findByPk(req.params.id)
    res.json(user)
})

router.get("/users/:id/shows", async function (req, res) {
    const user = await User.findByPk(req.params.id)
    const userShows = await Show.findAll(user)
    res.json(userShows)
})

router.put("/users/:userId/shows/:showId", async function (req, res) {
    const user = await User.findByPk(req.params.userId)
    const show = Show.findByPk(req.params.showId)
    //double check how to update the users watched show
})


module.exports = router