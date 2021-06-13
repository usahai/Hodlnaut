const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;
const userServices = require("./services/userServices");

const expectedResponse = {
	fetchUserCoins: {
		positive: {
			BTC: "0.5",
			ETH: "2",
		},
		negative: "Error: User not found",
	},
};

describe("Services", () => {
	describe("userServices", () => {
		it("fetchUserCoins - positive", async () => {
			let resp = await userServices.fetchUserCoins("user-1");

			expect(resp).to.eql(expectedResponse.fetchUserCoins.positive);
		});

		it("fetchUserCoins - negative", async () => {
			const stub = sinon
				.stub(userServices, "fetchUserCoins")
				.returns(expectedResponse.fetchUserCoins.negative);
			let resp;

			try {
				resp = await userServices.fetchUserCoins("invalid user");
			} catch (error) {
				console.log("[fUC] came into error block");
			}

			expect(stub.calledOnce).to.be.true;
			expect(resp).to.be.a("string");
			expect(resp).to.equal(expectedResponse.fetchUserCoins.negative);
		});
	});
});
