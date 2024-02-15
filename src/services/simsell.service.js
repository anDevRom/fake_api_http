const express = require("express");

const router = express.Router();

router.post("/api/v1/SimSale/Sell", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    msisdn: "79112223344",
    statusId: 1,
    price: 2000,
    eShopOrderId: 1,
    simCardId: 1,
    msisdnPrice: 2000,
  });
});

router.post("/api/v1/EShopOrder/:eShopOrderId/Sale", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    simSellId: 999,
    simCards: [
      {
        id: 1,
        statusId: 1,
        msisdn: "79112223344",
      },
    ],
  });
});

module.exports = router;
