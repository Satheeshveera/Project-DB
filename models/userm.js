const mongoose = require("mongoose");
const User_Schema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  User_Id: {
    type: String,
    unique: true,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },

  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", User_Schema);

module.exports = User;
