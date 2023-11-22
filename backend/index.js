const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./db/conn.js");

const deviceRoute = require("./routes/device");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/devices", deviceRoute);

app.listen(PORT, () => {
  console.log(`Backend server up and running at Port : ${PORT}`);
});
