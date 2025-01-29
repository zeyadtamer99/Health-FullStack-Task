const supabase = require("../config/supabaseClient");

const getAllInfluencers = async () => supabase.from("influencers").select("*");
const insertInfluencer = async (influencer) =>
  supabase.from("influencers").insert([influencer]);
const deleteInfluencerById = async (id) =>
  supabase.from("influencers").delete().eq("id", id);

module.exports = { getAllInfluencers, insertInfluencer, deleteInfluencerById };
