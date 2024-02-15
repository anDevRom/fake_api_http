const express = require("express");
const { delay } = require("../helpers");

const router = express.Router();

router.get("/api/v2/Subscribers/Subscriber", async (req, res) => {
  await delay(3000);

  const okResponse = {
    FullName: "Иванов Иван Иванович",
    Birthday: "1990-01-01T00:00:00.000Z",
    RegistrationAddress: {
      City: "г. Москва",
      Street: "ул. Ленина",
      House: "д. 1",
      PostIndex: "111111",
    },
    Sex: 0,
    IdentityDocumentFields: {
      TypeDoc: "1",
      Series: "1234",
      Number: "123456",
      IssuedBy: "ТП №1",
      IssuedOn: "2004-01-01T00:00:00.000Z",
    },
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(okResponse);
});

module.exports = router;
