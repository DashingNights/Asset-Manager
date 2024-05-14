const express = require("express");
const config = require("./config");
const loginrouter = require("./router/main");
const path = require("path");
const app = express();
const port = config.port;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
	res.redirect("/login");
});

app.use("/login", loginrouter);

app.listen(port);
