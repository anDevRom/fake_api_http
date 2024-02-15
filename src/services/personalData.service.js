const express = require("express");

const router = express.Router();

router.put("/api/v1/branches/:branchId/clients/:clientId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
});

module.exports = router;
