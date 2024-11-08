const{Router} = require("express")
const router = Router()
const{User, Show} = require("../models/index")
const{check, validationResult, matchedData} = require("express-validator")

router.get("/", async function (req,res) {
    const shows = await Show.findAll()
    if (!shows) {
        return res.status(404).json({message: "shows not found"})
    }
    res.json(shows)
})

router.get("/:id", async function (req, res) {
    const show = await Show.findByPk(req.params.id)
    if (!show) {
        return res.status(404).json({message: "show not found"})
    }
    res.json(show)
})

router.get("/:id/users", async function (req, res) {
    const show = await User.findByPk(req.params.id)
    const showUsers = await Show.findAll(show)
    if (!show || !showUsers) {
        return res.status(404).json({message: "show or show viewers(users) not found"})
    }
    res.json(showUsers)
})

router.put("/:id/available", async function (req, res) {
    const show = await Show.findByPk(req.params.id)
    if (!show) {
        return res.status(404).json({message: "show not found"})
    }
    if (show.available == true) {
        await show.update({available: false})
    }else {
        await show.update({available: false})
    }
})

router.delete("/:id", async function (req, res) {
    const show = await Show.destroy(
        {where: {id: req.params.id}}
    )
    if (!show) {
        return res.status(404).json({message: "show not found"})
    }
    res.json(show)
})

router.get("/genre", async function (req, res) {
    const shows = await Show.findAll({where: {genre: req.params.genre}})
    if (!shows) {
        return res.status(404).json({message: "shows not found"})
    }
    res.json(shows)
})

module.exports = router