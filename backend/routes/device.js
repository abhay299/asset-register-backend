const router = require("express").Router();
const Data = require("../models/sysData");

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

router.get("/", async (req, res) => {
  try {
    // Retrieve data from the collection
    const documents = await Data.find({}).exec();
    console.log("DATA =>", documents);
    // Display data on a simple HTML page
    // res.send(`
    //         <html>
    //         <head>
    //             <title>Data from MongoDB</title>
    //         </head>
    //         <body>
    //             <h1>Data from MongoDB</h1>
    //             <pre>${JSON.stringify(documents, null, 2)}</pre>
    //         </body>
    //         </html>
    //     `);
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
