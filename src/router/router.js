const express = require("express");
const router = express.Router();
const fastAuth = require("../modules/fastauth/fastAuth");


router.get("/", (req, res) => {
    // res.render("loginpage");
    res.render("main/index")
});

module.exports = router;
