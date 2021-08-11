const express = require("express");

const router = express.Router();

// middlewares validations
const { authCheck, adminCheck } = require("../middlewares/auth");

// middlewares controller
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

// routes-endpoints
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;