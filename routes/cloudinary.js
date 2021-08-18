const express = require("express");
const router = express.Router();

// middleware validations process
const { authCheck, adminCheck } = require("../middlewares/auth");

// middleware controllers
const { upload, remove } = require("../controllers/cloudinary");

// endpoints - routes
router.post("/uploadimages", authCheck, adminCheck, upload);
router.post("/removeimage", authCheck, adminCheck, remove);

module.exports = router;
