const express = require('express');

const { delay } = require('../helpers');

const router = express.Router();

let counter = 0;

router.get('/b2bcheck', async (req, res) => {
  res.sendStatus(404)
})

// SalesOfficeLimitationsService
router.get('/api/v1/ActiveSalesOffice/Status/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    isConfirmed: counter > 3,
    IsMigrationResultReceive: counter > 3
  });
  counter++;
});

router.post('/api/v1/ActiveSalesOffice/:salesOfficeId', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    DateTime: new Date().toDateString()
  });
});

router.get('/api/v1/dealers/:foo/offices', (req, res) => {
  const { query } = req.query;

  const offices = [
    {
      id: 1094267,
      address: ', Москва, точка для тестирования, , нет '
    },
    {
      id: 1094367,
      address: ', Москва, точка для тестирования, , нет '
    },
    {
      id: 1094467,
      address: ', Москва, точка для тестирования, , нет '
    },
    {
      id: 1094567,
      address: ', Москва, точка для тестирования, , нет '
    },
    {
      id: 1094667,
      address: ', Москва, точка для тестирования, , нет '
    }
  ];

  res.json({
    salesOffices: offices.filter((office) => String(office.id).startsWith(query))
  });
});
//

//WFM_ADMIN_SHELL
router.get('/localapi/v1/Roles', async (req, res) => {
  await delay(1000);

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json([
    // {
    //   "id": 1,
    //   "name": "WFM_Admin"
    // },
    {
      id: 2,
      name: 'WFM_Manager'
    },
    {
      id: 3,
      name: 'WFM_Seller'
    },
    {
      id: 4,
      name: 'AuthAdmin'
    },
    {
      id: 5,
      name: 'TestRole'
    },
    {
      id: 6,
      name: 'TestRole2'
    },
    {
      id: 7,
      name: 'TestRole3'
    },
    {
      id: 8,
      name: 'TestRole4'
    },
    {
      id: 9,
      name: 'TestRole13'
    },
    {
      id: 10,
      name: 'TestRole14'
    },
    {
      id: 11,
      name: 'TestRole15'
    },
    {
      id: 12,
      name: 'test111111'
    },
    {
      id: 13,
      name: 'test45'
    },
    {
      id: 14,
      name: 'test457'
    },
    {
      id: 15,
      name: 'test34'
    },
    {
      id: 16,
      name: 'test35'
    },
    {
      id: 17,
      name: 'test3567'
    },
    {
      id: 18,
      name: 'TestCleanup'
    },
    {
      id: 19,
      name: 'SellerMB'
    },
    {
      id: 20,
      name: 'SellerLD'
    },
    {
      id: 21,
      name: 'SellerUntemplatedSim'
    },
    {
      id: 22,
      name: 'SellerUntemplatedESim'
    },
    {
      id: 23,
      name: 'SellerTest'
    },
    {
      id: 24,
      name: 'SellerTele2Employee'
    },
    {
      id: 25,
      name: 'SellerT2Payment'
    },
    {
      id: 26,
      name: 'SellerB2B'
    },
    {
      id: 27,
      name: 'SA_Supervisor'
    },
    {
      id: 28,
      name: 'PRMT_User'
    },
    {
      id: 29,
      name: 'SellerWeb'
    },
    {
      id: 30,
      name: 'SellerWeb228'
    },
    {
      id: 31,
      name: 'SellerServices'
    },
    {
      id: 32,
      name: 'AutotestAppsellerRole'
    },
    {
      id: 33,
      name: 'TEST_01'
    },
    {
      id: 34,
      name: 'RoleAdmin'
    },
    {
      id: 35,
      name: 'testRoleAssignment1'
    },
    {
      id: 36,
      name: 'testRoleAssignment2'
    },
    {
      id: 37,
      name: 'testRoleAssignment3'
    },
    {
      id: 38,
      name: 'VLTestRole'
    },
    {
      id: 39,
      name: 'TestTopic1'
    },
    {
      id: 40,
      name: 'AsCardRead'
    },
    {
      id: 41,
      name: 'testRoleAssignment4'
    },
    {
      id: 42,
      name: 'PRMT_SOffer'
    },
    {
      id: 43,
      name: 'testRoleAssignment5'
    },
    {
      id: 44,
      name: 'testRoleAssignment6'
    },
    {
      id: 45,
      name: 'testRoleAssignment7'
    },
    {
      id: 46,
      name: 'SellerFD'
    },
    {
      id: 47,
      name: 'SellerTele2Start'
    },
    {
      id: 48,
      name: 'Сourier'
    },
    {
      id: 49,
      name: 'AgentRtc'
    },
    {
      id: 50,
      name: 'SellerServicesEPC'
    },
    {
      id: 51,
      name: 'SellerInstallmentsEPC'
    },
    {
      id: 52,
      name: 'SellerInstallments'
    },
    {
      id: 53,
      name: 'SellerEshop'
    },
    {
      id: 54,
      name: 'SellerWink'
    },
    {
      id: 55,
      name: 'AresAdmin'
    },
    {
      id: 56,
      name: 'testRoleAssignment8'
    },
    {
      id: 57,
      name: 'Courier'
    },
    {
      id: 58,
      name: 'Test123'
    },
    {
      id: 59,
      name: 'SellerWebCheck'
    },
    {
      id: 60,
      name: 'MdmUfms'
    },
    {
      id: 61,
      name: 'SellerMnp'
    },
    {
      id: 62,
      name: 'InstallerRTK'
    },
    {
      id: 63,
      name: 'AppAdmin'
    }
  ]);
});

let userRoles = ['B_Role', 'C_Role', 'D_Role'];

router.get('/localapi/v1/Users/:userId/Roles', async (req, res) => {
  await delay(1000);

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json(userRoles);
});

router.post('/localapi/v1/Users/:userId/Roles', async (req, res) => {
  await delay(1000);

  userRoles.push(req.body.roleName);

  res.setHeader('Content-Type', 'application/json');
  res.sendStatus(200);
  // res.sendStatus(407)
});

router.delete('/localapi/v1/Users/:userId/Roles', async (req, res) => {
  await delay(1000);

  userRoles = userRoles.filter((role) => role !== req.body.roleName);

  res.setHeader('Content-Type', 'application/json');
  res.sendStatus(200);
  // res.sendStatus(407)
});
//

router.get('/api/v1/Offices/:officeId', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    isActiveSettingAvailable: true,
    // activeSettingReason: "Ошибка",
    fullAddress: 'город Москва, улица Полбина, 12А'
  });
});
router.post('/SalesOfficeLimitationsService/api/v1/ActiveSalesOffice/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(404);
  res.end();
});
router.get(
  '/SalesOfficeLimitationsService/secured/subunit/check/info/outletCode/:msisdn/:outletCode',
  (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json({
      canRegisterUser: true,
      canSale: true,
      canMnp: true,
      registrationTypeByChannel: 'AUTO',
      status: 'Открыта',
      outletAddress: 'г. Москва, ул. Арбат, д.46 1',
      salesChanelId: -17,
      registrationSign: 'Автоматическая регистрация',
      outletExist: true
    });
  }
);

router.post('/upload', (req) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendStatus(201);
});

router.put('/api/v1/branches/:branchId/clients/:clientId', async (req, res) => {
  await delay(3000);

  res.setHeader('Content-Type', 'application/json');
  res.status(200);

  res.json({
    ticketNumber: '13',
    serviceRequestId: '03'
  });
});

router.post('/AddFile', async (req, res) => {
  await delay(3000);

  res.setHeader('Content-Type', 'application/json');
  res.sendStatus(200);
});

module.exports = router;
