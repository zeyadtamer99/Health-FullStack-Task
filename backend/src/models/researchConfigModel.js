const supabase = require("../config/supabaseClient");

const insertResearchConfig = async (config) =>
  supabase.from("research_configurations").insert([config]);

const getResearchConfigs = async () =>
  supabase.from("research_configurations").select("*");

module.exports = { insertResearchConfig, getResearchConfigs };
