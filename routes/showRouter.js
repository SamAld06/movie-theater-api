const{Router} = require("express")
const router = Router()
const{User, Show} = require("../models/index")
const{check, validationResult, matchedData} = require("express-validator")

router.get("/shows", async function (req,res) {
    const shows = await Show.findAll()
    res.json(shows)
})

router.get("/shows/:id", async function (req, res) {
    const show = await Show.findByPk(req.params.id)
    res.json(show)
})

router.get("/shows/:id/users", async function (req, res) {
    const show = await User.findByPk(req.params.id)
    const showUsers = await Show.findAll(show)
    res.json(showUsers)
})

router.put("/shows/:id/available", async function (req, res) {
    const show = await Show.findByPk(req.params.id)
    if (show.available == true) {
        await show.update({available: false})
    }else {
        await show.update({available: false})
    }
})

router.delete("/shows/:id", async function (req, res) {
    const show = await Show.destroy(
        {where: {id: req.params.id}}
    )
    res.json(show)
})

router.get("/shows/genre", async function (req, res) {
    const shows = await Show.findAll({where: {genre: req.params.genre}})
})

module.exports = router