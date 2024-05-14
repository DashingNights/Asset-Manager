"use strict";
const express = require("express");
const config = require("./config");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("index");
});
