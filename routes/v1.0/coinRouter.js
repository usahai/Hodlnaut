const express = require("express");
const router = express.Router();
const coinServices = require("../../services/coinServices");

router.get("/getCoinValue", async function (req, res, next) {
	let currency = req.query.currency;

	// Only sending the most recent value of the coin. Can be
	// edited to send the entire object by changing line 14 to
	// res.status(200).send(resp);
	try {
		const resp = await coinServices.fetchCoinValue(currency);

		res.status(200).send(resp.last);
	} catch (error) {
		console.log(error);
		// Sending forbidden
		res.status(403).send("Unable to fetch details");
	}
});

module.exports = router;
