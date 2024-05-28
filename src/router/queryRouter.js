const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("query/v1/index");
});
router.get("/demo", (req, res) => {
    res.render("query/demo");
});


module.exports = router;
