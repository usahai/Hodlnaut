const express = require("express");
const router = express.Router();
const userServices = require("../../services/userServices");

router.get("/:id", async function (req, res, next) {
	let userId = req.params.id;

	try {
		let userCoinData = await userServices.fetchUserCoins(userId);
		let resp;

		resp = await userServices.fetchUserTotal(userCoinData);

		console.log("Sending the data: ", JSON.stringify(resp));
		res.status(200).send(JSON.stringify(resp));
	} catch (error) {
		res.status(404).send("User not found");
	}
});

module.exports = router;
