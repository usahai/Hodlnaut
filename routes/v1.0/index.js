// This file is a default export of middlewares for this application
const express = require("express");
const router = express.Router();
// const coinRouter = require("./coinRouter");
const userRouter = require("./userRouter");

// Hiding this since this route is not supposed to be exposed
// router.use("/coinRouter", coinRouter);
router.use("/userRouter", userRouter);
module.exports = router;
