const express = require("express");

const shopNumbersMock = require("../mocks/shopNumbers.mock");
const shopTariffsMock = require("../mocks/shopTariffs.mock");
const { delay } = require("../helpers");

const router = express.Router();

router.get("/api/v1/Offices/:officeId/sellAvailability", async (req, res) => {
  await delay(3000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    branchId: 95,
    siteId: "siteMsk",
    isEsimAvailable: true,
    isSimAvailable: true,
  });
});

router.get("/api/v1/Directory/ShopTariffs", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(shopTariffsMock);
});

router.get("/api/v1/Directory/ShopNumbers", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(shopNumbersMock);
});

router.get("/api/v1/Directory/ShopNumbers/Search", (req, res) => {
  const query = req.query.query;
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  const searchResult = shopNumbersMock.categoryNumbers.map((category) => {
    return {
      ...category,
      numbersList: category.numbersList.filter((number) =>
        new RegExp(query).test(number)
      ),
    };
  });
  res.json({ categoryNumbers: searchResult });
});

module.exports = router;
