const {
  insertClaims,
  getClaimsByInfluencer,
  deleteClaimById,
} = require("../models/claimModel");
const { extractHealthClaims } = require("../services/aiService");

const addClaims = async (req, res, next) => {
  try {
    const { influencer_id, content } = req.body;
    if (!content || content.length > 1000) {
      return res.status(400).json({ message: "Content too long or missing" });
    }

    const extractedClaims = await extractHealthClaims(content);
    const claimsToInsert = extractedClaims.map((claim) => ({
      influencer_id,
      claim_text: claim,
      verification_status: "questionable",
      trust_score: 50,
    }));

    const { data, error } = await insertClaims(claimsToInsert);
    if (error) throw error;

    res
      .status(201)
      .json({ message: "Claims extracted and saved", claims: data });
  } catch (error) {
    next(error);
  }
};

const getClaims = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await getClaimsByInfluencer(id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const deleteClaim = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await deleteClaimById(id);
    if (error) throw error;
    res.json({ message: "Claim deleted successfully", data });
  } catch (error) {
    next(error);
  }
};

module.exports = { addClaims, getClaims, deleteClaim };
