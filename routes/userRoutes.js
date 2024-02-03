const express = require("express");
const { resgisterUser, loginUser} = require("../controllers/userControllers");

const router = express.Router()

router.post("/",resgisterUser);
router.post("/login",loginUser);

module.exports = router;