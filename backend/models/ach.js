const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  achievements: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model(
  "Achievement",
  achievementSchema
);