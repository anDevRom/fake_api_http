const express = require('express');

const router = express.Router();

router.put('/api/v2/branches/:branchId/clients/:clientId', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    bpmTicketNumber: 'TEST_bpmTicketNumber',
    bpmIncidentId: 'TEST_bpmIncidentId'
  });
});

router.get('/api/v1/b2bAccessTypes', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json([
    { id: 1, name: 'Пользователь' },
    { id: 2, name: 'Администратор' },
    { id: 3, name: 'Гость' },
    { id: 4, name: 'Нет' }
  ]);
});

router.put('/api/v1/subscribers/:subscriberId/b2bAccessType', (req, res) => {
  res.sendStatus(409);
});

module.exports = router;
