const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Accouts = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, equired: true },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Accouts", Accouts);
