const{Router} = require("express")
const router = Router()
const{User, Show} = require("../models/index")
const{check, validationResult, matchedData} = require("express-validator")

router.get("/", async function (req,res) {
    const users = await User.findAll()
    if (!users) {
        return res.status(404).json({message: "users not found"})
    }
    res.json(users)
})

router.get("/:id", async function (req, res) {
    const user = await User.findByPk(req.params.id)
    if (!user) {
        return res.status(404).json({message: "user not found"})
    }
    res.json(user)
})

router.get("/:id/shows", async function (req, res) {
    const user = await User.findByPk(req.params.id)
    const userShows = await Show.findAll(user)
    if (!user || !userShows) {
        return res.status(404).json({message: "user or user shows not found"})
    }
    res.json(userShows)
})

router.post("/users/:userId/shows/:showId", async function (req, res) {
    const user = await User.findByPk(req.params.userId)
    const show = Show.findByPk(req.params.showId)
    if (!user || !show) {
        return res.status(404).json({message: "user or show not found"})
    }
    //double check how to update the users watched show
    await user.addShow(show)

})


module.exports = router