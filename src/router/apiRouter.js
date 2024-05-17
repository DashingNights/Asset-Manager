const express = require("express");
const router = express.Router();
const Inventory = require("../model/hardware_inventory");

router.get("/", (req, res) => {
	res.send("api online");
});

router.post("/inventory", async (req, res, next) => {
	const inventoryform = new Inventory({
		Item_Holder: req.body.Item_Holder,
		Computer_1: {
			IsUsed: req.body.Computer_1IsUsed,
			Vendor: req.body.Computer_1Vendor,
			Brand: req.body.Computer_1Brand,
			Price: req.body.Computer_1Price,
			Dates: {
				Purchased: req.body.Computer_1DatesPurchased,
				Warranty_End: req.body.Computer_1DatesWarranty_End,
			},
			Model: req.body.Computer_1Model,
			Serial_Number: req.body.Computer_1Serial_Number,
			Asset_ID: req.body.Computer_1Asset_ID,
			PC_ID: req.body.Computer_1PC_ID,
			CPU: {
				Model: req.body.Computer_1CPUModel,
				Speed: req.body.Computer_1CPUSpeed,
			},
			RAM: {
				Size: req.body.Computer_1RAMSize,
				Type: req.body.Computer_1RAMType,
				Speed: req.body.Computer_1RAMSpeed,
			},
			Storage: {
				Disk_1: {
					Type: req.body.Computer_1StorageDisk_1Type,
					Size: req.body.Computer_1StorageDisk_1Size,
				},
				Disk_2: {
					Type: req.body.Computer_1StorageDisk_2Type,
					Size: req.body.Computer_1StorageDisk_2Size,
				},
				Disk_3: {
					Type: req.body.Computer_1StorageDisk_3Type,
					Size: req.body.Computer_1StorageDisk_3Size,
				},
				Disk_4: {
					Type: req.body.Computer_1StorageDisk_4Type,
					Size: req.body.Computer_1StorageDisk_4Size,
				},
			},
			Optical_Drive: req.body.Computer_1Optical_Drive,
			OS: {
				Preloaded: req.body.Computer_1OSPreloaded,
				Platform: req.body.Computer_1OSPlatform,
				Version: req.body.Computer_1OSVersion,
			},
			Hostname: req.body.Computer_1Hostname,
			Remarks: req.body.Computer_1Remarks,
		},
		Computer_2: {
			IsUsed: req.body.Computer_2IsUsed,
			Vendor: req.body.Computer_2Vendor,
			Brand: req.body.Computer_2Brand,
			Price: req.body.Computer_2Price,
			Dates: {
				Purchased: req.body.Computer_2DatesPurchased,
				Warranty_End: req.body.Computer_2DatesWarranty_End,
			},
			Model: req.body.Computer_2Model,
			Serial_Number: req.body.Computer_2Serial_Number,
			Asset_ID: req.body.Computer_2Asset_ID,
			PC_ID: req.body.Computer_2PC_ID,
			CPU: {
				Model: req.body.Computer_2CPUModel,
				Speed: req.body.Computer_2CPUSpeed,
			},
			RAM: {
				Size: req.body.Computer_2RAMSize,
				Type: req.body.Computer_2RAMType,
				Speed: req.body.Computer_2RAMSpeed,
			},
			Storage: {
				Disk_1: {
					Type: req.body.Computer_2StorageDisk_1Type,
					Size: req.body.Computer_2StorageDisk_1Size,
				},
				Disk_2: {
					Type: req.body.Computer_2StorageDisk_2Type,
					Size: req.body.Computer_2StorageDisk_2Size,
				},
				Disk_3: {
					Type: req.body.Computer_2StorageDisk_3Type,
					Size: req.body.Computer_2StorageDisk_3Size,
				},
				Disk_4: {
					Type: req.body.Computer_2StorageDisk_4Type,
					Size: req.body.Computer_2StorageDisk_4Size,
				},
			},
			Optical_Drive: req.body.Computer_2Optical_Drive,
			OS: {
				Preloaded: req.body.Computer_2OSPreloaded,
				Platform: req.body.Computer_2OSPlatform,
				Version: req.body.Computer_2OSVersion,
			},
			Hostname: req.body.Computer_2Hostname,
			Remarks: req.body.Computer_2Remarks,
		},
		Computer_3: {
			IsUsed: req.body.Computer_3IsUsed,
			Vendor: req.body.Computer_3Vendor,
			Brand: req.body.Computer_3Brand,
			Price: req.body.Computer_3Price,
			Dates: {
				Purchased: req.body.Computer_3DatesPurchased,
				Warranty_End: req.body.Computer_3DatesWarranty_End,
			},
			Model: req.body.Computer_3Model,
			Serial_Number: req.body.Computer_3Serial_Number,
			Asset_ID: req.body.Computer_3Asset_ID,
			PC_ID: req.body.Computer_3PC_ID,
			CPU: {
				Model: req.body.Computer_3CPUModel,
				Speed: req.body.Computer_3CPUSpeed,
			},
			RAM: {
				Size: req.body.Computer_3RAMSize,
				Type: req.body.Computer_3RAMType,
				Speed: req.body.Computer_3RAMSpeed,
			},
			Storage: {
				Disk_1: {
					Type: req.body.Computer_3StorageDisk_1Type,
					Size: req.body.Computer_3StorageDisk_1Size,
				},
				Disk_2: {
					Type: req.body.Computer_3StorageDisk_2Type,
					Size: req.body.Computer_3StorageDisk_2Size,
				},
				Disk_3: {
					Type: req.body.Computer_3StorageDisk_3Type,
					Size: req.body.Computer_3StorageDisk_3Size,
				},
				Disk_4: {
					Type: req.body.Computer_3StorageDisk_4Type,
					Size: req.body.Computer_3StorageDisk_4Size,
				},
			},
			Optical_Drive: req.body.Computer_3Optical_Drive,
			OS: {
				Preloaded: req.body.Computer_3OSPreloaded,
				Platform: req.body.Computer_3OSPlatform,
				Version: req.body.Computer_3OSVersion,
			},
			Hostname: req.body.Computer_3Hostname,
			Remarks: req.body.Computer_3Remarks,
		},
		Monitor_1: {
			IsUsed: req.body.Monitor_1IsUsed,
			Vendor: req.body.Monitor_1Vendor,
			Brand: req.body.Monitor_1Brand,
			Price: req.body.Monitor_1Price,
			Dates: {
				Purchased: req.body.Monitor_1DatesPurchased,
				Warranty_End: req.body.Monitor_1DatesWarranty_End,
			},
			Model: req.body.Monitor_1Model,
			Serial_Number: req.body.Monitor_1Serial_Number,
			Asset_ID: req.body.Monitor_1Asset_ID,
			Monitor_ID: req.body.Monitor_1Monitor_ID,
			Size: req.body.Monitor_1Size,
			Resolution: req.body.Monitor_1Resolution,
			Remarks: req.body.Monitor_1Remarks,
		},
		Monitor_2: {
			IsUsed: req.body.Monitor_2IsUsed,
			Vendor: req.body.Monitor_2Vendor,
			Brand: req.body.Monitor_2Brand,
			Price: req.body.Monitor_2Price,
			Dates: {
				Purchased: req.body.Monitor_2DatesPurchased,
				Warranty_End: req.body.Monitor_2DatesWarranty_End,
			},
			Model: req.body.Monitor_2Model,
			Serial_Number: req.body.Monitor_2Serial_Number,
			Asset_ID: req.body.Monitor_2Asset_ID,
			Monitor_ID: req.body.Monitor_2Monitor_ID,
			Size: req.body.Monitor_2Size,
			Resolution: req.body.Monitor_2Resolution,
			Remarks: req.body.Monitor_2Remarks,
		},
		Monitor_3: {
			IsUsed: req.body.Monitor_3IsUsed,
			Vendor: req.body.Monitor_3Vendor,
			Brand: req.body.Monitor_3Brand,
			Price: req.body.Monitor_3Price,
			Dates: {
				Purchased: req.body.Monitor_3DatesPurchased,
				Warranty_End: req.body.Monitor_3DatesWarranty_End,
			},
			Model: req.body.Monitor_3Model,
			Serial_Number: req.body.Monitor_3Serial_Number,
			Asset_ID: req.body.Monitor_3Asset_ID,
			Monitor_ID: req.body.Monitor_3Monitor_ID,
			Size: req.body.Monitor_3Size,
			Resolution: req.body.Monitor_3Resolution,
			Remarks: req.body.Monitor_3Remarks,
		},
	});

	try {
		// const newInventoryForm =
		await inventoryform.save();
		res.redirect(`/triage`);
	} catch (err) {
		console.error(err);
		res.send("Error creating article");
	}
});

module.exports = router;
