const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const Inventory = require("../model/hardware_inventory");
const PcInventory = require("../model/pc");
const MonitorInventory = require("../model/monitor");
const UserInventory = require("../model/user");

router.get("/", (req, res) => {
	res.send("api online");
});

router.get("/inventory/newpc", async (req, res, next) => {
	res.render("main/data-editing/new/newPC", { pc: new PcInventory() });
});
router.post("/inventory/newpc", async (req, res, next) => {
	const item = new PcInventory({
		Item_Holder: req.body.Item_Holder,
		IsUsed: req.body.IsUsed,
		Vendor: req.body.Vendor,
		Brand: req.body.Brand,
		Price: req.body.Price,
		Dates: {
			Purchased: req.body.DatePurchased,
			Warranty_End: req.body.DateWarranty_End,
		},
		Model: req.body.Model,
		Serial_Number: req.body.Serial_Number,
		Asset_ID: req.body.Asset_ID,
		PC_ID: req.body.PC_ID,
		CPU: {
			Model: req.body.CPUModel,
			Speed: req.body.CPUSpeed,
		},
		RAM: {
			Size: req.body.RAMSize,
			Type: req.body.RAMType,
			Speed: req.body.RAMSpeed,
		},
		Storage: {
			Disk_1: {
				Type: req.body.StorageDisk_1Type,
				Size: req.body.StorageDisk_1Size,
			},
			Disk_2: {
				Type: req.body.StorageDisk_2Type,
				Size: req.body.StorageDisk_2Size,
			},
			Disk_3: {
				Type: req.body.StorageDisk_3Type,
				Size: req.body.StorageDisk_3Size,
			},
			Disk_4: {
				Type: req.body.StorageDisk_4Type,
				Size: req.body.StorageDisk_4Size,
			},
		},
		Optical_Drive: req.body.Optical_Drive,
		OS: {
			Preloaded: req.body.OSPreloaded,
			Platform: req.body.OSPlatform,
			Version: req.body.OSVersion,
		},
		Hostname: req.body.Hostname,
		Remarks: req.body.Remarks,
	});
	req.pc = item;
	console.log("new pc request recieved for " + item.PC_ID);
	await newAndRedirect("pc")(req, res);
});
router.get("/inventory/editpc/:id", async (req, res, next) => {
	try {
		const item = await PcInventory.findById(req.params.id);
		res.render("main/data-editing/edit/editPC", { pc: item });
	} catch (err) {
		console.error(err);
		res.send("Error fetching item");
	}
});
router.put("/inventory/editpc/:id", async (req, res, next) => {
	req.pc = await PcInventory.findById(req.params.id);
	next();
},
saveAndRedirect("pc")
);


router.get("/inventory/newuser", async (req, res, next) => {
	res.render("main/data-editing/new/newUser", { user: new UserInventory() });
});
router.post("/inventory/newuser", async (req, res, next) => {
	const item = new UserInventory({
		Item_Holder: req.body.Item_Holder,
		email: req.body.email,
	});
	req.user = item;
	console.log("new user request recieved for " + item.email);
	await newAndRedirect("user")(req, res);
});
router.get("/inventory/edituser/:id", async (req, res, next) => {
	try {
		const item = await UserInventory.findById(req.params.id);
		res.render("main/data-editing/edit/editUser", { user: item });
	} catch (err) {
		console.error(err);
		res.send("Error fetching item");
	}
});
router.put("/inventory/edituser/:id", async (req, res, next) => {
		req.user = await UserInventory.findById(req.params.id);
		next();
	},
	saveAndRedirect("user")
);



router.get("/inventory/newmonitor", async (req, res, next) => {
	res.render("main/data-editing/new/newMonitor", { monitor: new MonitorInventory() });
});
router.post("/inventory/newmonitor", async (req, res, next) => {
	const item = new MonitorInventory({
		Item_Holder: req.body.Item_Holder,
		IsUsed: req.body.IsUsed,
		Vendor: req.body.Vendor,
		Brand: req.body.Brand,
		Price: req.body.Price,
		Dates: {
			Purchased: req.body.DatePurchased,
			Warranty_End: req.body.DateWarranty_End,
		},
		Model: req.body.Model,
		Serial_Number: req.body.Serial_Number,
		Asset_ID: req.body.Asset_ID,
		Monitor_ID: req.body.Monitor_ID,
		Size: req.body.Size,
		Resolution: req.body.Resolution,
		Remarks: req.body.Remarks,
	});
	req.monitor = item;
	console.log("new monitor request recieved for " + item.Monitor_ID);
	await newAndRedirect("monitor")(req, res);
});
router.get("/inventory/editmonitor/:id", async (req, res, next) => {
	try {
		const item = await MonitorInventory.findById(req.params.id);
		res.render("main/data-editing/edit/editMonitor", { monitor: item });
	} catch (err) {
		console.error(err);
		res.send("Error fetching item");
	}
});
router.put("/inventory/editmonitor/:id", async (req, res, next) => {
	req.monitor = await MonitorInventory.findById(req.params.id);
	next();
},
saveAndRedirect("monitor")
);

function newAndRedirect(savetype) {
	return async (req, res) => {
		switch (savetype) {
			case "user":
				{
					console.log("case user");
					let UserInventory = req.user;
					UserInventory.Item_Holder = req.body.Item_Holder;
					UserInventory.email = req.body.email;
					console.log(req.body.Item_Holder);
					console.log(req.body.email);
					try {
						let user = await UserInventory.save();
						if (user) {
							res.redirect('/api/inventory/newuser')
						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			case "pc":
				{
					let PcInventory = req.pc;
					PcInventory.Item_Holder = req.body.Item_Holder;
					PcInventory.IsUsed = req.body.IsUsed;
					PcInventory.Vendor = req.body.Vendor;
					PcInventory.Brand = req.body.Brand;
					PcInventory.Price = req.body.Price;
					PcInventory.Dates.Purchased = req.body.DatePurchased;
					PcInventory.Dates.Warranty_End = req.body.DateWarranty_End;
					PcInventory.Model = req.body.Model;
					PcInventory.Serial_Number = req.body.Serial_Number;
					PcInventory.Asset_ID = req.body.Asset_ID;
					PcInventory.PC_ID = req.body.PC_ID;
					PcInventory.CPU.Model = req.body.CPUModel;
					PcInventory.CPU.Speed = req.body.CPUSpeed;
					PcInventory.RAM.Size = req.body.RAMSize;
					PcInventory.RAM.Type = req.body.RAMType;
					PcInventory.RAM.Speed = req.body.RAMSpeed;

					PcInventory.Storage.Disk_1.Type = req.body.StorageDisk_1Type;
					PcInventory.Storage.Disk_1.Size = req.body.StorageDisk_1Size;
					PcInventory.Storage.Disk_2.Type = req.body.StorageDisk_2Type;
					PcInventory.Storage.Disk_2.Size = req.body.StorageDisk_2Size;
					PcInventory.Storage.Disk_3.Type = req.body.StorageDisk_3Type;
					PcInventory.Storage.Disk_3.Size = req.body.StorageDisk_3Size;
					PcInventory.Storage.Disk_4.Type = req.body.StorageDisk_4Type;
					PcInventory.Storage.Disk_4.Size = req.body.StorageDisk_4Size;

					PcInventory.Optical_Drive = req.body.Optical_Drive;
					PcInventory.OS.Preloaded = req.body.OSPreloaded;
					PcInventory.OS.Platform = req.body.OSPlatform;
					PcInventory.OS.Version = req.body.OSVersion;
					PcInventory.Hostname = req.body.Hostname;
					PcInventory.Remarks = req.body.Remarks;

					try {
						let pc = await PcInventory.save();
						if (pc) {
							res.redirect('/api/inventory/newpc')

						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			case "monitor":
				{
					let MonitorInventory = req.monitor;
					MonitorInventory.Item_Holder = req.body.Item_Holder;
					MonitorInventory.IsUsed = req.body.IsUsed;
					MonitorInventory.Vendor = req.body.Vendor;
					MonitorInventory.Brand = req.body.Brand;
					MonitorInventory.Price = req.body.Price;
					MonitorInventory.Dates.Purchased = req.body.DatesPurchased;
					MonitorInventory.Dates.Warranty_End = req.body.DatesWarranty_End;
					MonitorInventory.Model = req.body.Model;
					MonitorInventory.Serial_Number = req.body.Serial_Number;
					MonitorInventory.Asset_ID = req.body.Asset_ID;
					MonitorInventory.Monitor_ID = req.body.Monitor_ID;
					MonitorInventory.Size = req.body.Size;
					MonitorInventory.Resolution = req.body.Resolution;
					MonitorInventory.Remarks = req.body.Remarks;
					try {
						let monitor = await MonitorInventory.save();
						if (monitor) {
							res.redirect('/api/inventory/newmonitor')

						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			default:
				// handle unrecognized type
				throw new Error(`Unrecognized type: ${type}`);
		}
	};
}
function saveAndRedirect(savetype) {
	return async (req, res) => {
		switch (savetype) {
			case "user":
				{
					console.log("case user");
					const userData = {
						Item_Holder: req.body.Item_Holder,
						email: req.body.email,
					};
					try {
						let user = await UserInventory.findByIdAndUpdate(req.body.id, userData, { new: true });
						if (user) {
							res.redirect('/triage/data-edit-triage')
						} else {
						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			case "pc":
				{
					const pcData = {
						Item_Holder: req.body.Item_Holder,
						IsUsed: req.body.IsUsed,
						Vendor: req.body.Vendor,
						Brand: req.body.Brand,
						Price: req.body.Price,
						Dates: {
							Purchased: req.body.DatesPurchased,
							Warranty_End: req.body.DatesWarranty_End,
						},
						Model: req.body.Model,
						Serial_Number: req.body.Serial_Number,
						Asset_ID: req.body.Asset_ID,
						PC_ID: req.body.PC_ID,
						CPU: {
							Model: req.body.CPUModel,
							Speed: req.body.CPUSpeed,
						},
						RAM: {
							Size: req.body.RAMSize,
							Type: req.body.RAMType,
							Speed: req.body.RAMSpeed,
						},
						Storage: {
							Disk_1: {
								Type: req.body.StorageDisk_1Type,
								Size: req.body.StorageDisk_1Size,
							},
							Disk_2: {
								Type: req.body.StorageDisk_2Type,
								Size: req.body.StorageDisk_2Size,
							},
							Disk_3: {
								Type: req.body.StorageDisk_3Type,
								Size: req.body.StorageDisk_3Size,
							},
							Disk_4: {
								Type: req.body.StorageDisk_4Type,
								Size: req.body.StorageDisk_4Size,
							},
						},
						Optical_Drive: req.body.Optical_Drive,
						OS: {
							Preloaded: req.body.OSPreloaded,
							Platform: req.body.OSPlatform,
							Version: req.body.OSVersion,
						},
						Hostname: req.body.Hostname,
						Remarks: req.body.Remarks,
					};
					try {
						let pc = await PcInventory.findByIdAndUpdate(req.body.id, pcData, { new: true });
						if (pc) {
							res.redirect('/triage/data-edit-triage')

						} else {
						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			case "monitor":
				{
					const monitorData = {
						Item_Holder: req.body.Item_Holder,
						IsUsed: req.body.IsUsed,
						Vendor: req.body.Vendor,
						Brand: req.body.Brand,
						Price: req.body.Price,
						Dates: {
							Purchased: req.body.DatesPurchased,
							Warranty_End: req.body.DatesWarranty_End,
						},
						Model: req.body.Model,
						Serial_Number: req.body.Serial_Number,
						Asset_ID: req.body.Asset_ID,
						Monitor_ID: req.body.Monitor_ID,
						Size: req.body.Size,
						Resolution: req.body.Resolution,
						Remarks: req.body.Remarks,
					};
					try {
						let monitor = await MonitorInventory.findByIdAndUpdate(req.body.id, monitorData, { new: true });
						if (monitor) {
							res.redirect('/triage/data-edit-triage')
						} else {
						}
					} catch (err) {
						console.error(err);
					}
				}
				break;
			default:
				// handle unrecognized type
				throw new Error(`Unrecognized type: ${type}`);
		}
		// let article = req.article;
		// article.author = req.body.author;
		// article.title = Buffer.from(req.body.title).toString("base64");
		// article.description = req.body.description;
		// article.hashtags = req.body.hashtags;
		// article.type = req.body.type;
		// article.contentType = req.body["content-type"];
		// if (article.contentType === "video") {
		// 	const youtubeUrl = req.body["youtube-url"];
		// 	const youtubeEmbedUrl = youtubeUrl.replace("watch?v=", "embed/");
		// 	article.youtubeUrl = youtubeEmbedUrl;
		// } else {
		// 	article.markdown = req.body.markdown;
		// }
		// try {
		// 	article = await article.save();
		// 	res.redirect(`/articles/${article.slug}`);
		// } catch (e) {
		// 	console.error(e);
		// 	res.redirect("/oopsies")
		// }
	};
}
module.exports = router;

// const inventoryform = new Inventory({
// 	Item_Holder: req.body.Item_Holder,
// 	Computer_1: {
// 		IsUsed: req.body.Computer_1IsUsed,
// 		Vendor: req.body.Computer_1Vendor,
// 		Brand: req.body.Computer_1Brand,
// 		Price: req.body.Computer_1Price,
// 		Dates: {
// 			Purchased: req.body.Computer_1DatesPurchased,
// 			Warranty_End: req.body.Computer_1DatesWarranty_End,
// 		},
// 		Model: req.body.Computer_1Model,
// 		Serial_Number: req.body.Computer_1Serial_Number,
// 		Asset_ID: req.body.Computer_1Asset_ID,
// 		PC_ID: req.body.Computer_1PC_ID,
// 		CPU: {
// 			Model: req.body.Computer_1CPUModel,
// 			Speed: req.body.Computer_1CPUSpeed,
// 		},
// 		RAM: {
// 			Size: req.body.Computer_1RAMSize,
// 			Type: req.body.Computer_1RAMType,
// 			Speed: req.body.Computer_1RAMSpeed,
// 		},
// 		Storage: {
// 			Disk_1: {
// 				Type: req.body.Computer_1StorageDisk_1Type,
// 				Size: req.body.Computer_1StorageDisk_1Size,
// 			},
// 			Disk_2: {
// 				Type: req.body.Computer_1StorageDisk_2Type,
// 				Size: req.body.Computer_1StorageDisk_2Size,
// 			},
// 			Disk_3: {
// 				Type: req.body.Computer_1StorageDisk_3Type,
// 				Size: req.body.Computer_1StorageDisk_3Size,
// 			},
// 			Disk_4: {
// 				Type: req.body.Computer_1StorageDisk_4Type,
// 				Size: req.body.Computer_1StorageDisk_4Size,
// 			},
// 		},
// 		Optical_Drive: req.body.Computer_1Optical_Drive,
// 		OS: {
// 			Preloaded: req.body.Computer_1OSPreloaded,
// 			Platform: req.body.Computer_1OSPlatform,
// 			Version: req.body.Computer_1OSVersion,
// 		},
// 		Hostname: req.body.Computer_1Hostname,
// 		Remarks: req.body.Computer_1Remarks,
// 	},
// 	Computer_2: {
// 		IsUsed: req.body.Computer_2IsUsed,
// 		Vendor: req.body.Computer_2Vendor,
// 		Brand: req.body.Computer_2Brand,
// 		Price: req.body.Computer_2Price,
// 		Dates: {
// 			Purchased: req.body.Computer_2DatesPurchased,
// 			Warranty_End: req.body.Computer_2DatesWarranty_End,
// 		},
// 		Model: req.body.Computer_2Model,
// 		Serial_Number: req.body.Computer_2Serial_Number,
// 		Asset_ID: req.body.Computer_2Asset_ID,
// 		PC_ID: req.body.Computer_2PC_ID,
// 		CPU: {
// 			Model: req.body.Computer_2CPUModel,
// 			Speed: req.body.Computer_2CPUSpeed,
// 		},
// 		RAM: {
// 			Size: req.body.Computer_2RAMSize,
// 			Type: req.body.Computer_2RAMType,
// 			Speed: req.body.Computer_2RAMSpeed,
// 		},
// 		Storage: {
// 			Disk_1: {
// 				Type: req.body.Computer_2StorageDisk_1Type,
// 				Size: req.body.Computer_2StorageDisk_1Size,
// 			},
// 			Disk_2: {
// 				Type: req.body.Computer_2StorageDisk_2Type,
// 				Size: req.body.Computer_2StorageDisk_2Size,
// 			},
// 			Disk_3: {
// 				Type: req.body.Computer_2StorageDisk_3Type,
// 				Size: req.body.Computer_2StorageDisk_3Size,
// 			},
// 			Disk_4: {
// 				Type: req.body.Computer_2StorageDisk_4Type,
// 				Size: req.body.Computer_2StorageDisk_4Size,
// 			},
// 		},
// 		Optical_Drive: req.body.Computer_2Optical_Drive,
// 		OS: {
// 			Preloaded: req.body.Computer_2OSPreloaded,
// 			Platform: req.body.Computer_2OSPlatform,
// 			Version: req.body.Computer_2OSVersion,
// 		},
// 		Hostname: req.body.Computer_2Hostname,
// 		Remarks: req.body.Computer_2Remarks,
// 	},
// 	Computer_3: {
// 		IsUsed: req.body.Computer_3IsUsed,
// 		Vendor: req.body.Computer_3Vendor,
// 		Brand: req.body.Computer_3Brand,
// 		Price: req.body.Computer_3Price,
// 		Dates: {
// 			Purchased: req.body.Computer_3DatesPurchased,
// 			Warranty_End: req.body.Computer_3DatesWarranty_End,
// 		},
// 		Model: req.body.Computer_3Model,
// 		Serial_Number: req.body.Computer_3Serial_Number,
// 		Asset_ID: req.body.Computer_3Asset_ID,
// 		PC_ID: req.body.Computer_3PC_ID,
// 		CPU: {
// 			Model: req.body.Computer_3CPUModel,
// 			Speed: req.body.Computer_3CPUSpeed,
// 		},
// 		RAM: {
// 			Size: req.body.Computer_3RAMSize,
// 			Type: req.body.Computer_3RAMType,
// 			Speed: req.body.Computer_3RAMSpeed,
// 		},
// 		Storage: {
// 			Disk_1: {
// 				Type: req.body.Computer_3StorageDisk_1Type,
// 				Size: req.body.Computer_3StorageDisk_1Size,
// 			},
// 			Disk_2: {
// 				Type: req.body.Computer_3StorageDisk_2Type,
// 				Size: req.body.Computer_3StorageDisk_2Size,
// 			},
// 			Disk_3: {
// 				Type: req.body.Computer_3StorageDisk_3Type,
// 				Size: req.body.Computer_3StorageDisk_3Size,
// 			},
// 			Disk_4: {
// 				Type: req.body.Computer_3StorageDisk_4Type,
// 				Size: req.body.Computer_3StorageDisk_4Size,
// 			},
// 		},
// 		Optical_Drive: req.body.Computer_3Optical_Drive,
// 		OS: {
// 			Preloaded: req.body.Computer_3OSPreloaded,
// 			Platform: req.body.Computer_3OSPlatform,
// 			Version: req.body.Computer_3OSVersion,
// 		},
// 		Hostname: req.body.Computer_3Hostname,
// 		Remarks: req.body.Computer_3Remarks,
// 	},
// 	Monitor_1: {
// 		IsUsed: req.body.Monitor_1IsUsed,
// 		Vendor: req.body.Monitor_1Vendor,
// 		Brand: req.body.Monitor_1Brand,
// 		Price: req.body.Monitor_1Price,
// 		Dates: {
// 			Purchased: req.body.Monitor_1DatesPurchased,
// 			Warranty_End: req.body.Monitor_1DatesWarranty_End,
// 		},
// 		Model: req.body.Monitor_1Model,
// 		Serial_Number: req.body.Monitor_1Serial_Number,
// 		Asset_ID: req.body.Monitor_1Asset_ID,
// 		Monitor_ID: req.body.Monitor_1Monitor_ID,
// 		Size: req.body.Monitor_1Size,
// 		Resolution: req.body.Monitor_1Resolution,
// 		Remarks: req.body.Monitor_1Remarks,
// 	},
// 	Monitor_2: {
// 		IsUsed: req.body.Monitor_2IsUsed,
// 		Vendor: req.body.Monitor_2Vendor,
// 		Brand: req.body.Monitor_2Brand,
// 		Price: req.body.Monitor_2Price,
// 		Dates: {
// 			Purchased: req.body.Monitor_2DatesPurchased,
// 			Warranty_End: req.body.Monitor_2DatesWarranty_End,
// 		},
// 		Model: req.body.Monitor_2Model,
// 		Serial_Number: req.body.Monitor_2Serial_Number,
// 		Asset_ID: req.body.Monitor_2Asset_ID,
// 		Monitor_ID: req.body.Monitor_2Monitor_ID,
// 		Size: req.body.Monitor_2Size,
// 		Resolution: req.body.Monitor_2Resolution,
// 		Remarks: req.body.Monitor_2Remarks,
// 	},
// 	Monitor_3: {
// 		IsUsed: req.body.Monitor_3IsUsed,
// 		Vendor: req.body.Monitor_3Vendor,
// 		Brand: req.body.Monitor_3Brand,
// 		Price: req.body.Monitor_3Price,
// 		Dates: {
// 			Purchased: req.body.Monitor_3DatesPurchased,
// 			Warranty_End: req.body.Monitor_3DatesWarranty_End,
// 		},
// 		Model: req.body.Monitor_3Model,
// 		Serial_Number: req.body.Monitor_3Serial_Number,
// 		Asset_ID: req.body.Monitor_3Asset_ID,
// 		Monitor_ID: req.body.Monitor_3Monitor_ID,
// 		Size: req.body.Monitor_3Size,
// 		Resolution: req.body.Monitor_3Resolution,
// 		Remarks: req.body.Monitor_3Remarks,
// 	},
// });

// try {
// 	// const newInventoryForm =
// 	await inventoryform.save();
// 	res.redirect(`/triage`);
// } catch (err) {
// 	console.error(err);
// 	res.send("Error creating item");
// }
