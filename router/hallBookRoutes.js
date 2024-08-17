const express = require("express");
const {
  createRoom,
  getAllRooms,
  book,
} = require("../controllers/hallBookingController");
const hallBookRouter = express.Router();

// add routes to the router
hallBookRouter.post("/createRoom", createRoom);
hallBookRouter.get("/getAllRooms", getAllRooms);
hallBookRouter.post("/book", book);

module.exports = hallBookRouter;
