const mongoose = require("mongoose");

const shortSchema = new mongoose.Schema({
  fullLink: String,
  shortLink: String,
});

const short = mongoose.model("short", shortSchema);

module.exports = short;
