import User from "../models/User";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

//REGISTER NEW USER
const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "NUMBER",
      url: "url",
    },
  });
  res.status(200).json({
    success: true,
    message: "User Registered Successfully",

  });
});
export { registerUser };
