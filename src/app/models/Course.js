const mongoose = require("mongoose");

const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    imageUrl: { type: String, maxLength: 255 },
    price: { type: Number, equired: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Courses", Course);
