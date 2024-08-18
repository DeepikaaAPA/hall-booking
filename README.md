Hall Booking API
The Hall Booking API is used to manage booking rooms at a specified date for a required time.

This can be used to create a room, book a room and view rooms booked by a customer.

The Hall Booking API provides the following endpoints :

POST
Create Room
https://hall-booking-api-t9ne.onrender.com/createRoom
Creates a room.

Body
raw (json)
json
{
"room": "lily",
"amenities": ["ac", "wifi"],
"seats": 1000,
"pricePerHr": 8000
}
GET
Get Customer Bookings
https://hall-booking-api-t9ne.onrender.com/getCustomerBookings

Body
raw (json)
json
{
"customer":"Joe"
}
POST
Book a room
https://hall-booking-api-t9ne.onrender.com/book
Book a room with request body giving the details.

Sample Response

Booking success:

{

"message": "booked successfully",

"bookingID": "JoeSun Aug 18 2024 10:06:49 GMT+0000 (Coordinated Universal Time)"

}

If room is not available:

Room is not available in this time

Body
raw (json)
json
{
"customer": "Alice",
"room": "lily",
"date":"1.3.2024",
"startTime": "1.3.2024 5:30",
"endTime": "1.3.2024 6:30"
}
GET
Get All Rooms
https://hall-booking-api-t9ne.onrender.com/getAllRooms
Get all the rooms created and the total count of rooms.

GET
Get Room Bookings
http://127.0.0.1:3002/getRoomBookings
get all bookings done for a room.

Returns the count of bookings and bookings made for that room in response

Body
raw (json)
json
{
"room":"lily"
}
GET
Get All Bookings
https://hall-booking-api-t9ne.onrender.com/getAllBookings
Get all booking details made so far.

Sample response :

[

{

book_id: "AliceSun Aug 18 2024 10:00:00 GMT+0000 (Coordinated Universal Time)", customer: "Alice",

room: "lily",

bookedOn: "2024-08-18T10:00:00.004Z",

status: "paid",

date: "2024-11-02T00:00:00.000Z",

startTime: "2024-11-02T18:30:00.000Z",

endTime: "2024-11-02T20:30:00.000Z",

},

{ book_id: "JoeSun Aug 18 2024 10:06:35 GMT+0000 (Coordinated Universal Time)", customer: "Joe",

room: "rose",

bookedOn: "2024-08-18T10:06:35.745Z",

status: "paid",

date: "2024-11-02T00:00:00.000Z",

startTime: "2024-11-02T18:30:00.000Z",

endTime: "2024-11-02T20:30:00.000Z",

},

{

book_id: "JoeSun Aug 18 2024 10:06:49 GMT+0000 (Coordinated Universal Time)", customer: "Joe",

room: "rose",

bookedOn: "2024-08-18T10:06:49.783Z",

status: "paid",

date: "2024-11-03T00:00:00.000Z",

startTime: "2024-11-03T18:30:00.000Z",

endTime: "2024-11-03T20:30:00.000Z", },

];

Documentation :
https://documenter.getpostman.com/view/30933530/2sA3s9Cno1
