const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
	Item_Holder: {
		type: String,
		required: true,
	},
	Computer_1: {
		IsUsed: {
			type: Boolean,
			
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
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_2: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_3: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_4: {
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
			
		},
		OS: {
			Preloaded: {
				type: Boolean,
				
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
	Computer_2: {
		IsUsed: {
			type: Boolean,
			
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
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_2: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_3: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_4: {
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
			
		},
		OS: {
			Preloaded: {
				type: Boolean,
				
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
	Computer_3: {
		IsUsed: {
			type: Boolean,
			
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
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_2: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_3: {
				Type: {
					type: String,
					
				},
				Size: {
					type: Number,
					
				},
			},
			Disk_4: {
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
			
		},
		OS: {
			Preloaded: {
				type: Boolean,
				
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

	Monitor_1: {
		IsUsed: {
			type: Boolean,
			
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
	Monitor_2: {
		IsUsed: {
			type: Boolean,
			
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
	Monitor_3: {
		IsUsed: {
			type: Boolean,
			
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
});

module.exports = mongoose.model("hardware_inventory", inventorySchema);
