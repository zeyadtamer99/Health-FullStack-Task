const supabase = require("../config/supabaseClient");

const insertClaims = async (claims) => supabase.from("claims").insert(claims);

const getClaimsByInfluencer = async (influencer_id) =>
  supabase.from("claims").select("*").eq("influencer_id", influencer_id);

const deleteClaimById = async (id) =>
  supabase.from("claims").delete().eq("id", id);

module.exports = { insertClaims, getClaimsByInfluencer, deleteClaimById };
