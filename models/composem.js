const mongoose = require("mongoose");
const Compose_Schema = mongoose.Schema({
  From: {
    type: String,
  },
  To: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
  },
  Description: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

const Compose = mongoose.model("Compose", Compose_Schema);

module.exports = Compose;
