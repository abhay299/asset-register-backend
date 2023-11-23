const mongoose = require("mongoose");

const DataScheme = new mongoose.Schema({
  hostName: String,
  manufacturer: String,
  model: String,
  osName: String,
  totalPhysicalMemoryGB: Number,
  totalDiskSizeGB: Number,
});

module.exports = mongoose.model("Data", DataScheme);
