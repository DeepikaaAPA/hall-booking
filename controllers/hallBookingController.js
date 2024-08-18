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
    // bookings.forEach((bkg) =>
    //   console.log(bkg.endTime, reqStartTime, bkg.endTime > reqStartTime)
    // );

    const isBooked = bookings.filter(
      (bkg) =>
        bkg.room === room &&
        bkg.date.toISOString() == reqDate.toISOString() &&
        !(reqEndTime <= bkg.startTime || reqStartTime >= bkg.endTime)
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
  getAllBookings: async (req, res) => {
    bookings.length
      ? res.send({ count: bookings.length, message: bookings })
      : res.send({ message: `No bookings made` });
  },
  getCustomerBookings: async (req, res) => {
    const customer = req.body.customer;
    const resBookings = bookings.filter((bkg) => bkg.customer === customer);
    resBookings.length
      ? res.send({ count: resBookings.length, bookings: resBookings })
      : res.send({ message: `No bookings made by ${customer}` });
  },
  getRoomBookings: async (req, res) => {
    const room = req.body.room;
    const resBookings = bookings.filter((bkg) => bkg.room === room);
    resBookings.length
      ? res.send({ count: resBookings.length, bookings: resBookings })
      : res.send({ message: `No bookings made for room: ${room}` });
  },
};
module.exports = hallBookController;
