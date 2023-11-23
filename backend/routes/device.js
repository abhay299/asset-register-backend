const router = require("express").Router();
const Data = require("../models/Data.js");

router.get("/", async (req, res) => {
  try {
    // Retrieve data from the collection
    const documents = await Data.find({});
    console.log("DATA =>", documents);
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

module.exports = router;
