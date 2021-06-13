# Hodlnaut Coding Challenge

Thanks for taking the time to do our coding test!

On the Hodlnaut website, users can have balances in various cryptocurrency assets including BTC and ETH. Users also want to view their total balance in another asset such as USD. To be able to do this, we need to fetch prices for pairs such as BTC/USD and ETH/USD to convert between assets.

To give an example, let’s say the user’s balance is 0.5 BTC and 2 ETH. If the current BTC/USD price is 60000 and the ETH/USD price is 3000, then the user’s total balance in USD would be 60000 \* 0.5 + 3000 \* 2 = 36000 USD.

### Submission

Please fork the repl.it, and share the link with us. You can add the answers to the question directly in the document.

---

## Task

Create **one API endpoint using Node and Express that takes in a user id and returns the user's total balance in USD**.

Keep the user’s balances stored in memory. An example of the data to be stored is provided at the end of this section. Feel free to add more entries or change the way the data is stored if you want, but this is not necessary.

You will need to fetch the current prices from a third party public API. You can use the price from any cryptocurrency exchange but it is recommended that you use Bitstamp.

Here is a link to their API docs: https://www.bitstamp.net/api/#ticker

Assume that the only assets that the user’s balance can contain are **BTC and ETH**.

Ensure the API endpoint works correctly by writing at least one test case using the **Mocha and Chai** frameworks.

There is a test scaffold `test.js` that you can use and `package.json` has been changed so that `npm run test` will run the unit tests.

It’s expected that this task should take less than 2-3 hours to complete. If you find yourself spending too much time on this task, then just give a short explanation about what aspects were particularly time consuming and what steps you would’ve done in order to complete the task.

Aim to write clear and concise code.

```
const userBalances = {
  "user-1": {
    "BTC": "0.5",
    "ETH": "2"
  },
  "user-2": {
    "BTC": "0.1",
  },
  "user-3": {
    "ETH": "5",
  },
}
```

---

## Extras

To test the API endpoint:

After running the server, use the following in the shell to test the API endpoint:

```
curl https://Balance-API-Interview-Task-1.udbhavsahai.repl.co/[user_name]
```

To run the test suite:

```
npm test
```

I have added 2 libraries to facilitate my code.

-   axios -> to make the get call
-   sinon -> to stub the function I am testing

---

## Questions

**1. (Optional) If you didn’t have time to complete your intended design, what else would you have done?**

> I would have tried to get at retrival of at least 1 service - either the retrival of the coin balance or the current coin value

**2. Which took the most time? What did you find most difficult?**

> Figuring out how to get it working on repl.it. I had written a fairly detailed design, but could not get any of it working, so I re-wrote it in my VSCode environment thinking that something was wrong with my code. While bugs were definitely present, the issue was not with the code, but rather that the project could only read commonJS files. It took me quite a while figure out what the error in the console meant.

**3. If we wanted the balance to update on the frontend more often (10 times per second), how would you improve the current system to handle this?**

> I am thinking of 3 solutions, but I not sure any of the approaches would be ideal.
>
> The first is to do it on the front-end itself, and make the call at every 100ms intervals to the BE. Alternatively, you could batch the data, and split it into 10 parts on the UI, so you could do it every second instead of every tenth of a second.
>
> The second is to write some type of cron job. I have not written a cron job before, but my understanding is that it will be a microservice that will hit the URL at every x-interval. I am not 100% sure how I would get the UI-side to retrieve the data that from the service triggered.
>
> The third is to open a socket, and livestream the data from the back-end to the front-end, but instead of retrieving the value from the backend everytime it updates, we could set it to 100ms intervals. (Never written this before either, but studied the principle before);

**4. How did you find the test overall? If you have any suggestions on how we can improve the test, we'd love to hear them!**

> It would be great if we could write the code in VS Code and share it. Figuring out how to get it working on repl.it took up a lot of time, so having it in our own environment would make the test more accessible.
