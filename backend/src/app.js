const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const influencerRoutes = require("./routes/influencerRoutes");
const claimRoutes = require("./routes/claimRoutes");
const researchConfigRoutes = require("./routes/researchConfigRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/influencers", influencerRoutes);
app.use("/api/claims", claimRoutes);
app.use("/api/research-configurations", researchConfigRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
