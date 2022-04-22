const mongoose = require("mongoose");
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(
      "mongodb+srv://amardeepganguly:amardeep123@cluster0.keg5r.mongodb.net/bookit?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => console.log("Connected to database"));
};
module.exports = dbConnect;
