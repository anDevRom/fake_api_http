const express = require("express");

const router = express.Router();

router.post("/api/v1/clients/pep", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    msisdns: [
      { msisdn: "79111111111" },
      { msisdn: "79111111112" },
      { msisdn: "79111111113" },
      { msisdn: "79111111114" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
      { msisdn: "79111111115" },
    ],
  });
});

router.post("/api/v1/pep/code", (req, res) => {
  res.sendStatus(200);
});

router.post("/api/v1/Pep/:msisdn/code/isChecked", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
