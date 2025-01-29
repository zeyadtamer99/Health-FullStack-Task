const express = require("express");
const {
  addClaims,
  getClaims,
  deleteClaim,
} = require("../controllers/claimController");

const router = express.Router();

router.post("/", addClaims);
router.get("/:id", getClaims);
router.delete("/:id", deleteClaim);

module.exports = router;
