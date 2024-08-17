let rooms = [
  {
    room: "rose",
    amenities: ["ac", "wifi"],
    seats: 100,
    pricePerHr: 2323,
  },
];

let bookings = [];

const hallBookController = {
  createRoom: async (req, res) => {
    const { room, amenities, seats, pricePerHr } = req.body;
    const newRoom = { room, amenities, seats, pricePerHr };

    rooms.push(newRoom);
    res.send({ message: "Room created", rooms });
  },
  getAllRooms: async (req, res) => {
    res.send({ count: rooms.length, rooms });
  },
  book: async (req, res) => {
    let { customer, date, startTime, endTime, room } = req.body;
    let reqDate = new Date(date);
    let reqStartTime = new Date(startTime);
    let reqEndTime = new Date(endTime);
    // console.log("request body", req.body);

    const isBooked = bookings.filter(
      (bkg) =>
        bkg.room === room &&
        bkg.date.toISOString() == reqDate.toISOString() &&
        bkg.endTime > reqStartTime
    );
    console.log("isBooked", isBooked, isBooked.length);
    //room is already booked in that time
    if (isBooked.length) {
      res.send("Room is not available in this time");
    } else {
      let newBookingId = customer + new Date();
      bookings.push({
        book_id: newBookingId, //customer name+ booking timestamp
        customer: customer,
        room: room,
        bookedOn: new Date(), //todays date
        status: "paid", // or whatever needed
        date: reqDate,
        startTime: reqStartTime,
        endTime: reqEndTime,
      });
      res.send({ message: "booked successfully", bookingID: newBookingId });
    }
  },
};
module.exports = hallBookController;
