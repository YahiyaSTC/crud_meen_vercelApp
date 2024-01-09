const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique:true },
  phoneNumber: { type: String },  
});

module.exports = mongoose.model("users", userSchema);
