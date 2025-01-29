const {
  getAllInfluencers,
  insertInfluencer,
  deleteInfluencerById,
} = require("../models/influencerModel");

const getInfluencers = async (req, res) => {
  const { data, error } = await getAllInfluencers();
  if (error)
    return res
      .status(500)
      .json({ message: "Error fetching influencers", error });
  res.json(data);
};

const addInfluencer = async (req, res) => {
  const { data, error } = await insertInfluencer(req.body);
  if (error)
    return res.status(500).json({ message: "Error adding influencer", error });
  res.status(201).json(data);
};

const deleteInfluencer = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await deleteInfluencerById(id);
  if (error)
    return res
      .status(500)
      .json({ message: "Error deleting influencer", error });
  res.json({ message: "Influencer deleted successfully", data });
};

module.exports = { getInfluencers, addInfluencer, deleteInfluencer };
