const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Feedback = new Schema(
  {
    name: { type: String, require: true },
    phoneNumber: { type: Number },
    email: { type: String },
    message: { type: String, maxLength: 255 }
  }
);
module.exports = mongoose.model("Feedbacks", Feedback);
