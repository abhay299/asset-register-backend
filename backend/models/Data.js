const mongoose = require("mongoose");

const DataScheme = new mongoose.Schema(
  {
    hostName: { type: String },
    manufacturer: { type: String },
    model: { type: String },
    osName: { type: String },
    totalPhysicalMemoryGB: { type: Number },
    totalDiskSizeGB: { type: Number },
  },
  { collection: "assets" }
);

module.exports = mongoose.model("Data", DataScheme);
