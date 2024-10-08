const express = require('express');

const router = express.Router();

router.get('/api/v2/Sim/sale/availability', async (req, res) => {
  const { icc } = req.query;

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    balance: 300,
    branchId: 95,
    msisdn: '79112223344',
    icc,
    trplId: 18330,
    trplName: 'Классический (посекундный)',
    partyTypeId: null,
    usiStatus: null,
    simTypeId: 1
  });
});

router.post('/secured/mnp/check', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    resultType: 'OK',
    resultTitle: null,
    resultInfo: null,
    resultBody: null
  });
});

router.get('/secured/mnp/earliest/timeslots/:number', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    resultType: 'OK',
    resultTitle: null,
    resultInfo: null,
    resultBody: {
      earliestTimeSlot: '2023-10-13T17:00:00'
    }
  });
});

router.get('/secured/mnp/timeslots/:number/day/:timeslotsDay', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    resultType: 'OK',
    resultTitle: null,
    resultInfo: null,
    resultBody: [
      '2023-10-13T18:00:00',
      '2023-10-13T19:00:00',
      '2023-10-13T20:00:00',
      '2023-10-13T21:00:00',
      '2023-10-13T22:00:00',
      '2023-10-13T23:00:00'
    ]
  });
});

router.post('/secured/simcard/saleAvailable/check', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    resultType: 'OK',
    resultTitle: null,
    resultInfo: 'Продажа доступна',
    resultBody: null
  });
});

router.post('/secured/simcard/clients', (req, res) => {
  res.sendStatus(200);
});

router.post('/secured/mnp/transfer', (req, res) => {
  res.sendStatus(200);
});

router.post('/api/v1/SimCard/binding', (req, res) => {
  res.sendStatus(200);
});

router.get('/api/v2/Sim/IccPart/Check', (req, res) => {
  res.status(200);
  res.json({
    isCorrect: true
  });
});

router.post('/api/v2/Sim/untemplated', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
