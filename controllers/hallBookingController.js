let rooms = [
  {
    room: "rose",
    amenities: ["ac", "wifi"],
    seats: 100,
    pricePerHr: 2323,
  },
];

let bookings = [
  {
    book_id: "Anand12.12.12", //customer name+ booking timestamp
    customer: "Anand",
    room: "rose",
    bookedOn: new Date(), //todays date
    status: "paid",
    blockedDate: new Date("12-12-12"),
  },
];

const hallBookController = {
  createRoom: async (req, res) => {
    const { room, amenities, seats, pricePerHr } = req.body;
    const newRoom = { room, amenities, seats, pricePerHr };

    rooms.push(newRoom);
    res.send({ message: "Room created", rooms });
  },
  getAllRooms: async (req, res) => {
    res.send(rooms);
  },
};
module.exports = hallBookController;
