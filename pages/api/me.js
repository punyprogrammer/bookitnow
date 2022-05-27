import nc from "next-connect";
import onError from "../../middlewares/error";
import { currentUserProfile } from "../../controllers/authControllers";
import { isAuthenticatedUser } from "../../middlewares/auth";
import dbConnect from "../../config/dbConnect";
const handler = nc({ onError });
dbConnect();
handler.use(isAuthenticatedUser).get(currentUserProfile);
export default handler;
