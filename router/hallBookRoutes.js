const express = require("express");
const {
  createRoom,
  getAllRooms,
  book,
  getCustomerBookings,
  getAllBookings,
  getRoomBookings
} = require("../controllers/hallBookingController");
const hallBookRouter = express.Router();

// add routes to the router
hallBookRouter.post("/createRoom", createRoom);
hallBookRouter.get("/getAllRooms", getAllRooms);
hallBookRouter.post("/book", book);
hallBookRouter.get("/getCustomerBookings", getCustomerBookings);
hallBookRouter.get("/getAllBookings", getAllBookings);
hallBookRouter.get("/getRoomBookings", getRoomBookings);
module.exports = hallBookRouter;
