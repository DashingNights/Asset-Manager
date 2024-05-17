const express = require("express");
const router = express.Router();
const fastAuth = require("../modules/fastauth/fastAuth");


router.get("/", (req, res) => {
    res.render("loginpage");
});

router.post('/', (req, res) => {
    // Access form data from req.body
    const username = req.body.username;
    const password = req.body.password;

    // Process form data...
    try {
        const loginSuccessful = fastAuth(req, res, username, password);
        if (loginSuccessful) {
            res.redirect("/triage");
        } else {
            res.redirect("/login");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during login');
    }
});

module.exports = router;
