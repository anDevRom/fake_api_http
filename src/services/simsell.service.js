const express = require('express');

const router = express.Router();

let simSellId = 1;

router.post('/api/v1/SimSale/Sell', (req, res) => {
  const { msisdn, tariffSlug } = req.body;

  if (tariffSlug === 'Мой онлайн+') {
    res.sendStatus(409);
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200);

  res.json({
    msisdn,
    statusId: 1,
    price: 2000,
    eShopOrderId: 1,
    simCardId: 1,
    msisdnPrice: 2000,
    simSellId: simSellId++
  });
});

router.post('/api/v1/eShopOrder/:eShopOrderId/Sale', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  simSellId++;
  res.json({
    simSellId,
    simCards: [
      {
        id: 1,
        statusId: 1,
        msisdn: '79112223344',
        icc: '89701200000000000000'
      }
    ]
  });
});

module.exports = router;
