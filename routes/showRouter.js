const{Router} = require("express")
const router = Router()
const{User, Show} = require("../models/index")
const{check, validationResult, matchedData} = require("express-validator")



module.exports = router