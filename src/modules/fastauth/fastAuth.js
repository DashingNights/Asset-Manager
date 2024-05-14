const config = require("../../config");

function fastAuth(req, res, username, password) {
	const auth = {
		username: username,
		password: password,
	};
	if (auth.username === config.dummyuser.username && auth.password === config.dummyuser.password) {
        console.log("Login successful");
        return true;
	} else {
        return false;
    }
}

module.exports = fastAuth;
