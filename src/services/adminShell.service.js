const express = require("express");

const router = express.Router();

router.get("/rolesassignment/Position", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json([
    {
      id: 0,
      name: "POSITION_1",
      description: "string",
      isActive: true,
    },
    {
      id: 1,
      name: "POSITION_2",
      description: "string",
      isActive: true,
    },
    {
      id: 2,
      name: "POSITION_3",
      description: "string",
      isActive: true,
    },
    {
      id: 3,
      name: "POSITION_4",
      description: "string",
      isActive: true,
    },
    {
      id: 4,
      name: "POSITION_5",
      description: "string",
      isActive: true,
    },
  ]);
});

router.get("/rolesassignment/Roles/RoleAssignmentCondition", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.json({
    assignmentConditionsList: [
      {
        parameterTypeId: 1,
        parameterTypeName: "Партнер",
        values: ["ID_Яндекс.Маркет_UNV"],
      },
      {
        parameterTypeId: 2,
        parameterTypeName: "Дилер",
        values: ["Сбербанк", "Тиннькофф"],
      },
      {
        parameterTypeId: 3,
        parameterTypeName: "Офис продаж",
        values: ["Москва"],
      },
      {
        parameterTypeId: 4,
        parameterTypeName: "Должность",
        values: ["Продавец"],
      },
    ],
  });
});

router.put("/rolesassignment/Roles/RoleAssignmentCondition", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendStatus(200);
});

module.exports = router;
