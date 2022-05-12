import Room from "../models/Room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";
//GET All ROOMS api/rooms
const getAllRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();
  const apiFeatures = new APIFeatures(Room.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  console.log(apiFeatures);
  const rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  // const rooms = await Room.find();
  res
    .status(200)
    .json({ success: true, roomsCount, resPerPage, filteredRoomsCount, rooms });
});
//GET  Single Room  api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room  with given ID not found", 404));
  }
  res.status(200).json({ success: true, room });
});
//POST Create a new room =>  /api/rooms
const createNewRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});
//UPDATE  Update an existing room
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room  with given ID not found", 404));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });
  res.status(200).json({ success: true, room });
});
// DELETE A ROOM
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findByIdAndDelete(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room  with given ID not found", 404));
  }
  res.status(200).json({ success: true, room });
});

export { getAllRooms, createNewRoom, getSingleRoom, updateRoom, deleteRoom };
