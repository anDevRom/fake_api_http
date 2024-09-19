const express = require("express");
const { delay } = require("../helpers");

const router = express.Router();

router.get(
  "/api/v1/ClientRecreations/:msisdn/isAvailable",
  async (req, res) => {
    await delay(3000);

    const okResponse = {
      isAvailable: true,
      isOnline: true,
      checklist: [
        {
          id: 1,
          title: "CommonAccount",
          result: "True",
        },
        {
          id: 2,
          title: "MNP",
          result: "True",
        },
        {
          id: 4,
          title: "NegativeBalance",
          result: "True",
        },
        {
          id: 7,
          title: "CientType",
          result: "True",
        },
        {
          id: 9,
          title: "Mixx",
          result: "True",
        },
        {
          id: 5,
          title: "Dealer",
          result: "True",
        },
        {
          id: 11,
          title: "Equipment",
          result: "True",
        },
        {
          id: 10,
          title: "Broadband",
          result: "True",
        },
        {
          id: 8,
          title: "PromisePay",
          result: "True",
        },
        {
          id: 6,
          title: "SubsBlocked",
          result: "True",
        },
        {
          id: 3,
          title: "SubsNotFound",
          result: "False",
          message: "Профиль не удалось загрузить или абонент закрыт",
        },
      ],
    };
    const errorResponse = {
      isAvailable: false,
      checklists: [
        {
          id: 1,
          title: "ClientType",
          result: true,
          message: null,
        },
        {
          id: 2,
          title: "Balance",
          result: false,
          message: "Баланс абонента отрицательный",
        },
        {
          id: 3,
          title: "PromisedPayment",
          result: false,
          message: "Ошибка.",
        },
        {
          id: 4,
          title: "ClientProfile",
          result: true,
          message: null,
        },
      ],
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json(okResponse);
  }
);

router.post("/api/v1/ClientRecreations/:msisdn", async (req, res) => {
  await delay(3000);

  const okResponse = {
    newClientId: 0,
    isOnline: true,
    serviceRequestId: '123',
    number: 'TT123'
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(okResponse);
});

router.get("/api/v1/ErfDuplicate/Check", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    isNeedDuplicateRFA: true,
  });
});

router.get(
  "/api/v1/ClientTermination/:msisdn/isAvailable",
  async (req, res) => {
    await delay(3000);

    const okResponse = {
      isAvailable: true,
      isOnline: true,
    };
    const errorResponse = {
      isAvailable: false,
      checklist: [
        {
          id: 1,
          title: "ClientType",
          result: true,
          message: null,
        },
        {
          id: 2,
          title: "Balance",
          result: false,
          message: "Баланс абонента отрицательный",
        },
        {
          id: 3,
          title: "PromisedPayment",
          result: false,
          message: "Ошибка.",
        },
        {
          id: 4,
          title: "ClientProfile",
          result: true,
          message: null,
        },
      ],
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json(okResponse);
  }
);

router.post('/api/v1/ClientTermination/:msisdn', (req, res) => {
  const okResponse = {
    serviceRequestId: '1', 
    number: '2'
  }

  res.json(okResponse)
})

module.exports = router;
