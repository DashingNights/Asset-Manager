export async function ModifyItemOwnershipAndTiming(item, user, date, type) {
	const mongoose = require("mongoose");
	if (type === "return") {
		item.Item_Holder = "";
		item.IsUsed = false;
		await item.save();
	} else {
		item.Item_Holder = user;
		item.IsUsed = true;
		await item.save();
	}
}
