const mongoose=require("mongoose")
const dbConnect=require("../config/dbConnect")
const Room=require("../models/Room")
const roomsData=require("../data/rooms")
dbConnect();
const seedRooms=async()=>{


    try {



      await Room.deleteMany();
      console.log('Previous data deleted')
      await Room.insertMany(roomsData)
      console.log('Seeding successful')


    } catch (error) {
      console.log(error.message)
      process.exit();
    }
}
seedRooms();