import nc from "next-connect";
import onError from "../../../middlewares/error";
import { registerUser } from "../../../controllers/authControllers";
import dbConnect from "../../../config/dbConnect";
const handler = nc({ onError });
dbConnect();
handler.post(registerUser);
export default handler;
