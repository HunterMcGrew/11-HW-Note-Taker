// required 
const router = require("express").Router();
const apiRoutes = require("./api");

// tell it to use /api
router.use("/api", apiRoutes);

module.exports = router; 