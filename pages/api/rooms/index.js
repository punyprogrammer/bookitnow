import nc from "next-connect";
import onError from "../../../middlewares/error";
import {
  getAllRooms,
  createNewRoom,
} from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";
const handler = nc({ onError });
dbConnect();
handler.get(getAllRooms);
handler.post(createNewRoom);
export default handler;
