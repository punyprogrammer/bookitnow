import nc from "next-connect";
import { getAllRooms,createNewRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";
const handler = nc();
dbConnect();
handler.get(getAllRooms);
handler.post(createNewRoom);
export default handler;
