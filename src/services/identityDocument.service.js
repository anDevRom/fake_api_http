const express = require("express");
const documentFields = require("../mocks/documentFields");
const documentTypes = require("../mocks/documentTypes");

const router = express.Router();

router.get("/api/v1/IdentityDocumentTypes/1/Fields", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(documentFields);
});

router.get("/api/v1/IdentityDocumentTypes", (req, res ) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(documentTypes);
});

module.exports = router;
