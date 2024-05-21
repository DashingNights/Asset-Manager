const mongoose = require("mongoose");

const monitor = new mongoose.Schema(
	{
        Item_Holder: {
            type: String,
        },
		IsUsed: {
			type: Boolean,
            default: false,
		},
		Vendor: {
			type: String,
		},
		Brand: {
			type: String,
		},
		Price: {
			type: Number,
		},
		Dates: {
			Purchased: {
				type: Date,
			},
			Warranty_End: {
				type: Date,
			},
		},
		Model: {
			type: String,
		},
		Serial_Number: {
			type: String,
		},
		Asset_ID: {
			type: String,
		},
		Monitor_ID: {
			type: String,
		},
		Size: {
			type: Number,
		},
		Resolution: {
			type: String,
		},
		Remarks: {
			type: String,
		},
	},
);

module.exports = mongoose.model("monitors", monitor);
