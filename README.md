# Hodlnaut Coding Challenge

Thanks for taking the time to do our coding test!

On the Hodlnaut website, users can have balances in various cryptocurrency assets including BTC and ETH. Users also want to view their total balance in another asset such as USD. To be able to do this, we need to fetch prices for pairs such as BTC/USD and ETH/USD to convert between assets.

To give an example, let’s say the user’s balance is 0.5 BTC and 2 ETH. If the current BTC/USD price is 60000 and the ETH/USD price is 3000, then the user’s total balance in USD would be 60000 \* 0.5 + 3000 \* 2 = 36000 USD.

---

## To build

After cloning the repository, run

```
npm install
npm start
```

---

## To run

To test the API endpoint:

After running the server, use the following in the shell to test the API endpoint:

```
curl https://localhost:3000/user/[user name]
```

To run the test suite:

```
npm test
```

I have added 2 libraries to facilitate my code.

-   axios -> to make the get call
-   sinon -> to stub the function I am testing
