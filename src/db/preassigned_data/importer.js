const fs = require("fs");
const util = require("util");
const path = require("path");

const readFile = util.promisify(fs.readFile);

let savedVersionNumber;

readFile(path.join(__dirname, "/versions.json"), "utf8")
	.then((data) => {
		const parsedData = JSON.parse(data);
		savedVersionNumber = parsedData.item;
	})
	.then(() => {
		return readFile(path.join(__dirname, "/item/items.json"), "utf8");
	})
	.then((data) => {
		const parsedData = JSON.parse(data);
		const versionNumber = parsedData.version;
		if (versionNumber === savedVersionNumber) {
			console.log("item list is unchanged, import aborted");
		} else {
			//TODO: Import the item list to mongo
		}
	})
	.catch((err) => {
		console.error(err);
	});

readFile(path.join(__dirname, "/versions.json"), "utf8")
	.then((data) => {
		const parsedData = JSON.parse(data);
		savedVersionNumber = parsedData.user;
	})
	.then(() => {
		return readFile(path.join(__dirname, "/user/users.json"), "utf8");
	})
	.then((data) => {
		const parsedData = JSON.parse(data);
		const versionNumber = parsedData.version;
		if (versionNumber === savedVersionNumber) {
			console.log("user list is unchanged, import aborted");
		} else {
			//TODO: Import the item list to mongo
		}
	})
	.catch((err) => {
		console.error(err);
	});
