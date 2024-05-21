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

let userModel;
try {
	userModel = mongoose.model("users");
} catch (error) {
	userModel = mongoose.model("users", user);
}
module.exports = userModel;
