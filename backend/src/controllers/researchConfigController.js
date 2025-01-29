const {
  insertResearchConfig,
  getResearchConfigs,
} = require("../models/researchConfigModel");

const addResearchConfig = async (req, res, next) => {
  try {
    const { data, error } = await insertResearchConfig(req.body);
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const getResearchConfigsHandler = async (req, res, next) => {
  try {
    const { data, error } = await getResearchConfigs();
    if (error) throw error;
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { addResearchConfig, getResearchConfigsHandler };
