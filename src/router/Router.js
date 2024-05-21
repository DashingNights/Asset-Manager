const express = require("express");
const router = express.Router();
// const inventory = require("../model/hardware_inventory")


router.get("/", (req, res) => {
    // res.render("loginpage");
    res.render("main/index")
});
router.get("/edit-items-triage", (req, res) => {
    res.render("main/data-editing/dataedititems");
});
router.get("/data-edit-triage", (req, res) => {
    res.render("main/data-editing/dataEditTriage");
});

module.exports = router;
