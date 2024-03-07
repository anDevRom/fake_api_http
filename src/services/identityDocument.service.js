const express = require("express");
const documentFields = require("../mocks/documentFields");
const documentTypes = require("../mocks/documentTypes");

const router = express.Router();

router.get("/api/v1/IdentityDocumentTypes/1/Fields", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(documentFields);
});

router.get("/api/v1/IdentityDocumentTypes", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(documentTypes);
});

router.get("/api/v1/Countries/Filtered", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    countries: [
      {
        id: 1,
        nameRu: "Россия",
        nameEn: "Russian Federation",
      },
    ],
  });
});

router.get("/api/v1/IdentityDocumentTypes/:id/ValidityPeriod", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    result: true,
    isDocumentValid: true,
    message: "ok",
  });
});

router.get("/api/v1/ApprovedResidenceDocuments/Filtered", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
});

module.exports = router;
