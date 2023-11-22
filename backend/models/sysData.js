const mongoose = require("mongoose");

const sysDataScheme = new mongoose.Schema({
  HostName: String,
  Manufacturer: String,
  Model: String,
  OSName: String,
  TotalPhysicalMemoryGB: Number,
  TotalDiskSize: Number,
});

module.exports = mongoose.model("Data", sysDataScheme);
