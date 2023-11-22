const router = require("express").Router();
const Device = require("../models/sysData");

// Create Device
// router.post("/", verifyTokenAndAdmin, async (req, res) => {
//   const newDevice = new Device(req.body);

//   try {
//     const savedDevice = await newDevice.save();
//     res.status(200).json(savedDevice);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Get All Devices
router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    let devices;

    if (queryNew) {
      devices = await Device.find();
      //   devices = await Device.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      devices = await Device.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      devices = await Device.find();
    }
    console.log("Devices: ", devices);
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
