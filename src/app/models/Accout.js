const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Accouts = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, require: true , unique: true,immutable: true  },
    password: { type: String, require: true },
    email: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Accouts", Accouts);
