const express = require("express");

const { delay } = require("../helpers");

const router = express.Router();

router.get("/api/v1/Documents/Templates", async (req, res) => {
  await delay(3000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    templates: [
      { id: 1, name: "TEST_DEFAULT", isMnp: false, isBeautifulNumber: false },
      { id: 2, name: "TEST_MNP", isMnp: true, isBeautifulNumber: false },
      { id: 3, name: "TEST_BEAUTIFUL", isMnp: false, isBeautifulNumber: true },
    ],
  });
});

router.get("/api/v1/Documents/Templates/:templateId", async (req, res) => {
  await delay(3000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    url: "http://localhost:8080/documents/document_mock.pdf",
  });
});

router.post("/api/v1/SimSell/:simSellId/Document", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    requestId: "requestId",
  });
});

module.exports = router;
