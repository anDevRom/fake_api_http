const express = require("express");

const { delay } = require("../helpers");

const router = express.Router();

let counter = 0;

// SalesOfficeLimitationsService
router.get("/api/v1/ActiveSalesOffice/Status/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    isConfirmed: counter > 3,
    IsMigrationResultReceive: counter > 3,
  });
  counter++;
});

router.post("/api/v1/ActiveSalesOffice/:salesOfficeId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    DateTime: new Date().toDateString(),
  });
});
//

//WFM_ADMIN_SHELL
router.get("/localapi/v1/Roles", async (req, res) => {
  await delay(1000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json([
    { name: "G_Role" },
    { name: "F_Role" },
    { name: "B_Role" },
    { name: "C_Role" },
    { name: "D_Role" },
    { name: "E_Role" },
    { name: "A_Role" },
  ]);
});

let userRoles = ["B_Role", "C_Role", "D_Role"];

router.get("/localapi/v1/Users/:userId/Roles", async (req, res) => {
  await delay(1000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json(userRoles);
});

router.post("/localapi/v1/Users/:userId/Roles", async (req, res) => {
  await delay(1000);

  userRoles.push(req.body.roleName);

  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
  // res.sendStatus(407)
});

router.delete("/localapi/v1/Users/:userId/Roles", async (req, res) => {
  await delay(1000);

  userRoles = userRoles.filter((role) => role !== req.body.roleName);

  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
  // res.sendStatus(407)
});
//

router.get("/api/v1/Offices/:officeId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    isActiveSettingAvailable: true,
    // activeSettingReason: "Ошибка",
    fullAddress: "город Москва, улица Полбина, 12А",
  });
});
router.post(
  "/SalesOfficeLimitationsService/api/v1/ActiveSalesOffice/:id",
  (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(404);
    res.end();
  }
);
router.get(
  "/SalesOfficeLimitationsService/secured/subunit/check/info/outletCode/:msisdn/:outletCode",
  (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json({
      canRegisterUser: true,
      canSale: true,
      canMnp: true,
      registrationTypeByChannel: "AUTO",
      status: "Открыта",
      outletAddress: "г. Москва, ул. Арбат, д.46 1",
      salesChanelId: -17,
      registrationSign: "Автоматическая регистрация",
      outletExist: true,
    });
  }
);

router.post("/upload", (req) => {
  res.setHeader("Content-Type", "application/json");
  res.sendStatus(201);
});

router.put("/api/v1/branches/:branchId/clients/:clientId", async (req, res) => {
  await delay(3000);

  res.setHeader("Content-Type", "application/json");
  res.status(200);

  res.json({
    ticketNumber: "13",
    serviceRequestId: "03",
  });
});

router.post("/AddFile", async (req, res) => {
  await delay(3000);

  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
});

module.exports = router;
