const express = require("express");
const app = express();
const port = 3000;
const appRouter = require("./routes");

app.use(express.json());
app.use("/", appRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
