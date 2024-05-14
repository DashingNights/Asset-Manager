const config = require("../../config");

function fastAuth(req, res, next) {
    const auth = {
        username: req.body.username,
        password: req.body.password
    };
    if (auth.username === config.dummyuser.username && auth.password === config.dummyuser.password) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = fastAuth;