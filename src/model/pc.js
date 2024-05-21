const mongoose = require("mongoose");

const pc = new mongoose.Schema(
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
		PC_ID: {
			type: String,
		},
		CPU: {
			Model: {
				type: String,
			},
			Speed: {
				type: Number,
			},
		},
		RAM: {
			Size: {
				type: Number,
			},
			Type: {
				type: String,
			},
			Speed: {
				type: Number,
			},
		},
		Storage: {
			Disk_1: {
				IsUsed: {
					type: Boolean,
					default: false,
				},
				Type: {
					type: String,
				},
				Size: {
					type: Number,
				},
			},
			Disk_2: {
				IsUsed: {
					type: Boolean,
					default: false,
				},
				Type: {
					type: String,
				},
				Size: {
					type: Number,
				},
			},
			Disk_3: {
				IsUsed: {
					type: Boolean,
					default: false,
				},
				Type: {
					type: String,
				},
				Size: {
					type: Number,
				},
			},
			Disk_4: {
				IsUsed: {
					type: Boolean,
					default: false,
				},
				Type: {
					type: String,
				},
				Size: {
					type: Number,
				},
			},
		},
		Optical_Drive: {
			type: Boolean,
			default: false,
		},
		OS: {
			Preloaded: {
				type: Boolean,
				default: false,
			},
			Platform: {
				type: String,
			},
			Version: {
				type: String,
			},
		},
		Hostname: {
			type: String,
		},
		Remarks: {
			type: String,
		},
	},
	{ strict: false }
);

module.exports = mongoose.model("pcs", pc);
