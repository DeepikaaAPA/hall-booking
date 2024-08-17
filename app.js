//import express module
const express = require("express");

const hallBookRouter = require("./router/hallBookRoutes");
// create an express application
const app = express();
// use the express middleware for parsing json data
app.use(express.json());
app.use("/", hallBookRouter);
module.exports = app;
