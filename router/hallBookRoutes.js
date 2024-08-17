const express = require("express");
const {
  createRoom,
  getAllRooms,
} = require("../controllers/hallBookingController");
const hallBookRouter = express.Router();

// add routes to the router
hallBookRouter.post("/createRoom", createRoom);
hallBookRouter.get("/getAllRooms", getAllRooms);

module.exports = hallBookRouter;
