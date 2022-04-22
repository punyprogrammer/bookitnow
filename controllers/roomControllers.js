import Room from "../models/Room";
//GET All ROOMS api/rooms
const getAllRooms = async (_req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ success: true, count: rooms.length, rooms });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
//GET  Single Room  api/rooms/:id
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room  with given ID not found" });
    }
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
//POST Create a new room =>  /api/rooms
const createNewRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};
//UPDATE  Update an existing room
const updateRoom=async(req,res)=>{
    try {
     let room =await Room.findById(req.query.id);
     if(!room)
     {
        res.status(404)
        .json({ success: false, message: "Room  with given ID not found" });
     }
    room=await Room.findByIdAndUpdate(req.)
    } catch (error) {

    }
}

export { getAllRooms, createNewRoom, getSingleRoom };
