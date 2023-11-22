const mongoose = require("mongoose");

const sysDataScheme = new mongoose.Schema({
  HostName: String,
  OSName: String,
  RAM: Number,
  DiskSize: Number,
  Manufacturer: String,
  Model: String,
});

module.exports = mongoose.model("Data", sysDataScheme);
