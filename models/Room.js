const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Room Name"],
    trim: true,
    maxlength: [100, "Room name cannot exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please Enter a Room Price"],
    min: [1, "Price of a room cannot be below 1"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please Enter Room Description"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Room Address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please Enter  Room Guest Capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please Enter Number of Beds in the room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter a room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room",
    },
  },
  reviews: [
    {
      user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
