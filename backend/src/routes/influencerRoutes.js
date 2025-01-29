const express = require("express");
const {
  getInfluencers,
  addInfluencer,
  deleteInfluencer,
} = require("../controllers/influencerController");

const router = express.Router();
router.get("/", getInfluencers);
router.post("/", addInfluencer);
router.delete("/:id", deleteInfluencer);

module.exports = router;
