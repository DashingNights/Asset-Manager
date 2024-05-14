const express = require("express");
const config = require("./config");
const loginrouter = require("./router/loginrouter");
const path = require("path");
const mainrouter = require("./router/router");

const app = express();
const port = config.port;
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Your routes go here

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
	res.redirect("/login");
});

app.use("/login", loginrouter);
app.use("/hi", mainrouter);

app.listen(port);
