// Ideally, the SQL query would go here

const userBalances = {
	"user-1": {
		BTC: "0.5",
		ETH: "2",
	},
	"user-2": {
		BTC: "0.1",
	},
	"user-3": {
		ETH: "5",
	},
};

exports.fetchUserBalancesDAO = (userId) => {
	if (Object.keys(userBalances).includes(userId)) {
		return userBalances[userId];
	} else {
		throw new Error(404);
	}
};
