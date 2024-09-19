const express = require('express');
const { delay } = require('../helpers');

const router = express.Router();

router.get('/marker/Anonymous', async (req, res) => {
  await delay(3000);

  const okResponse = [
    {
      MarkerId: 0,
      Name: 'ТЕСТОВЫЙ_АНОНИМНЫЙ_МАРКЕР',
      Priority: 99,
      Url: ''
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.sendStatus(200);
  // res.status(200);
  // res.json(okResponse);
});

router.get('/api/v2/Markers', async (req, res) => {
  await delay(3000);

  const okResponseV2 = {
    Esim: true,
    Lte450: false,
    PayPackPersonalAccount: 123508337,
    BirthDate: '1989-11-23T00:00:00+03:00',
    TarificationTypeId: 1,
    DiagnosticParams: [
      // {
      //   MarkerId: 1,
      //   Value: 'ТЕСТОВЫЙ_МАРКЕР Дубликат РФА',
      //   Priority: 1,
      //   IsTaskNeeded: true,
      //   IsBlockSubscriberStatus: false,
      //   Key: 0,
      //   Url: '',
      //   Type: null,
      //   ColorType: 'Info'
      // },
      {
        MarkerId: 2,
        Value: 'ТЕСТОВЫЙ_МАРКЕР Корректировка',
        Priority: 2,
        IsTaskNeeded: true,
        IsBlockSubscriberStatus: false,
        Key: 0,
        Url: '',
        Type: null,
        ColorType: 'Info'
      },
      {
        MarkerId: 7,
        Value: 'ТЕСТОВЫЙ_МАРКЕР ДР',
        Priority: 7,
        IsTaskNeeded: true,
        IsBlockSubscriberStatus: false,
        Key: 0,
        Url: '',
        Type: null,
        ColorType: 'Info'
      },
      {
        MarkerId: 8,
        Value: 'ТЕСТОВЫЙ_МАРКЕР Сегодня',
        Priority: 8,
        IsTaskNeeded: true,
        IsBlockSubscriberStatus: false,
        Key: 0,
        Url: '',
        Type: null,
        ColorType: 'Info'
      },
      {
        MarkerId: 38,
        Value: 'ТЕСТОВЫЙ_МАРКЕР Замена SIM',
        Priority: 1,
        IsTaskNeeded: true,
        IsBlockSubscriberStatus: false,
        Key: 0,
        Url: '',
        Type: null,
        ColorType: 'Info'
      }
    ]
  };

  const okResponseDefault = {
    Data: okResponseV2,
    IsSuccess: true,
    MessageText: null,
    ResultType: 1,
    ResultCode: 0
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  // res.json(markers);
  res.json(okResponseV2);
});

const markers = JSON.parse("{\"Esim\":false,\"Lte450\":false,\"PayPackPersonalAccount\":118477880,\"BirthDate\":\"0001-01-01T02:31:00+02:31\",\"TarificationTypeId\":1,\"DiagnosticParams\":[{\"MarkerId\":2,\"Value\":\"Требуется корректировка регистрационных данных\",\"Priority\":2,\"IsTaskNeeded\":true,\"Url\":null,\"IsBlockSubscriberStatus\":false,\"Key\":0,\"Type\":null,\"ColorType\":\"Info\"}]}")

module.exports = router;
