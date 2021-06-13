const { fetchUserBalancesDAO } = require("../dao/userDao");
const { CURRENCY } = require("../util/constants");
const { fetchCoinValue } = require("./coinServices");

// Retrieve the total number of coins of each of BTC and
// Ethereum that the user has
exports.fetchUserCoins = async (userId) => {
	try {
		let resp = await fetchUserBalancesDAO(userId);

		return resp;
	} catch (error) {
		throw new Error("User not found");
	}
};

// Calculate the total amount of USD the user has
exports.fetchUserTotal = async (userCoinData) => {
	let total = 0;
	for (const curr in userCoinData) {
		let coinValue = await fetchCoinValue(CURRENCY[curr]);
		total += Number(userCoinData[curr]) * coinValue.last;
	}

	return total;
};
