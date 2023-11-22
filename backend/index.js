const express = require("express");
const cors = require("cors");
const app = express();
const deviceRoute = require("./routes/device.js");

require("dotenv").config();
require("./db/conn.js");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/devices", deviceRoute);

app.listen(PORT, () => {
  console.log(`Backend server up and running at Port : ${PORT}`);
});
