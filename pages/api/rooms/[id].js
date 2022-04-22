import nc from "next-connect";
import { getSingleRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";
const handler = nc();
dbConnect();
handler.get(getSingleRoom);
export default handler;