const express = require("express");
const router = express.Router();
const inventory = require("../model/hardware_inventory")


router.get("/", (req, res) => {
    // res.render("loginpage");
    res.render("main/index")
});
router.get("/data-editing", (req, res) => {
    res.render("main/data-editing/index", {
        inventory: inventory
    });
});

module.exports = router;
