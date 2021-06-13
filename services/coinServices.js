// Use this file for only 3rd party calls, DO NOT
// mix with our own BE calls
const axios = require("axios");
const { BITSTAMP } = require("../util/constants");

exports.fetchCoinValue = async (currency) => {
	try {
		let url = `${BITSTAMP}${currency}`;

		return await axios.get(url).then((response) => response.data);
	} catch (error) {
		console.log(error);
	}
};
