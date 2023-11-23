const router = require("express").Router();
const Data = require("../models/Data.js");

// Create Device
router.post("/", async (req, res) => {
  const newDevice = new Data(req.body);

  try {
    const savedDevice = await newDevice.save();
    res.status(200).json(savedDevice);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    // Retrieve data from the collection
    const documents = await Data.find({}).exec();
    console.log("DATA =>", documents);
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Get All Devices
// router.get("/", async (req, res) => {
//   const queryNew = req.query.new;
//   const queryCategory = req.query.category;

//   try {
//     let devices;

//     if (queryNew) {
//       devices = await Device.find();
//       //   devices = await Device.find().sort({ createdAt: -1 }).limit(5);
//     } else if (queryCategory) {
//       devices = await Device.find({
//         categories: {
//           $in: [queryCategory],
//         },
//       });
//     } else {
//       devices = await Device.find();
//     }
//     console.log("Devices: ", devices);
//     res.status(200).json(devices);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
