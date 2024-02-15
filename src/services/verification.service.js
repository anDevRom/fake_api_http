const express = require("express");

const router = express.Router();

router.post("/api/v1/Token/:msisdn/request", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    waitingTime: 60,
  });
});

router.post("/api/v1/Token/:msisdn/verify", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(true);
});

module.exports = router;
