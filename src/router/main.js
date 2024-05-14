const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join("views"));


router.get("/", (req, res) => {
    res.render("loginpage");
    // res.send("Login Page");
});

module.exports = router;
