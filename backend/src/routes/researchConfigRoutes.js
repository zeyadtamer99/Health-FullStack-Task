const express = require("express");
const {
  addResearchConfig,
  getResearchConfigsHandler,
} = require("../controllers/researchConfigController");

const router = express.Router();

router.post("/", addResearchConfig);
router.get("/", getResearchConfigsHandler);

module.exports = router;
