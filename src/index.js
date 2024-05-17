const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const loginrouter = require("./router/loginRouter");
const path = require("path");
const mainrouter = require("./router/Router");
const apiRouter = require("./router/apiRouter");
const app = express();
const port = config.port;
console.log(config.db.host);
console.log(config.db.name);
let mongodbString = `mongodb://${config.db.host}:27017/${config.db.name}`;
console.log(mongodbString);
mongoose
	.connect(mongodbString, {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
		// useCreateIndex: true,
		// useFindAndModify: false,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch(() => console.log("Failed to connect to MongoDB", err));

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
app.use("/triage", mainrouter);
app.use("/api", apiRouter);

app.listen(port);
