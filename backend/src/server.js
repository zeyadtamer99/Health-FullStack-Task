require("dotenv").config();
const app = require("./app");

console.log("🔍 SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("🔍 SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
