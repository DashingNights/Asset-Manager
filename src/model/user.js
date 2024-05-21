const mongoose = require("mongoose");

const user = new mongoose.Schema({
	Item_Holder: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("users", user);