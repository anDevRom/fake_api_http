const express = require('express');

const shopNumbersMock = require('../mocks/shopNumbers.mock');
const shopTariffsMock = require('../mocks/shopTariffs.mock');
const { delay } = require('../helpers');

const router = express.Router();

router.get('/api/v1/Offices/:officeId/sellAvailability', async (req, res) => {
  await delay(3000);

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    branchId: 95,
    siteId: 'siteMsk',
    isEsimAvailable: true,
    isSimAvailable: true
  });
});

router.get('/api/v1/Directory/ShopTariffs', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json(shopTariffsMock);
});

router.get('/api/v1/Directory/ShopNumbers', (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(true);
});

router.get('/api/v1/Directory/ShopNumbers/Search', (req, res) => {
  const query = req.query.query;
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  const searchResult = shopNumbersMock.categoryNumbers.map((category) => {
    return {
      ...category,
      numbersList: category.numbersList.filter((number) => new RegExp(query).test(number))
    };
  });
  res.json({ categoryNumbers: searchResult });
});

router.get('/api/v1/Orders', (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.json({
    orders: [
      {
        eshopOrderId: 'id_mnp_1',
        statusName: 'statusName',
        statusNameDisplay: 'statusNameDisplay',
        createdOn: '2024-07-25T14:51:23.825Z',
        clientName: 'clientName',
        clientPhone: '79211112233',
        isMnp: true,
        totalPrice: {
          amount: '500',
          currency: 'RUB'
        }
      },
      {
        eshopOrderId: 'id_2',
        statusName: 'statusName',
        statusNameDisplay: 'statusNameDisplay',
        createdOn: '2024-07-25T14:51:23.825Z',
        clientName: 'clientName',
        clientPhone: '79211112233',
        isMnp: false,
        totalPrice: {
          amount: '500',
          currency: 'RUB'
        }
      },
      {
        eshopOrderId: 'id_mnp_3',
        statusName: 'statusName',
        statusNameDisplay: 'statusNameDisplay',
        createdOn: '2024-07-25T14:51:23.825Z',
        clientName: 'clientName',
        clientPhone: '79211112233',
        isMnp: true,
        totalPrice: {
          amount: '500',
          currency: 'RUB'
        }
      },
      {
        eshopOrderId: 'id_4',
        statusName: 'statusName',
        statusNameDisplay: 'statusNameDisplay',
        createdOn: '2024-07-25T14:51:23.825Z',
        clientName: 'clientName',
        clientPhone: '79211112233',
        isMnp: false,
        totalPrice: {
          amount: '500',
          currency: 'RUB'
        }
      },
      {
        eshopOrderId: 'id_mnp_5',
        statusName: 'statusName',
        statusNameDisplay: 'statusNameDisplay',
        createdOn: '2024-07-25T14:51:23.825Z',
        clientName: 'clientName',
        clientPhone: '79211112233',
        isMnp: true,
        totalPrice: {
          amount: '500',
          currency: 'RUB'
        }
      }
    ],
    totalCount: 5,
    totalPages: 1
  });
});

router.get('/api/v2/Orders/:id', (req, res) => {
  const { id } = req.params;

  const isMnp = id.split('_').includes('mnp');

  res.json({
    id: '12345',
    branchId: 95,
    status: {
      id: 0,
      name: 'status_name',
      description: 'status_description'
    },
    createdOn: '2024-07-25T15:26:27.442Z',
    cancelAfter: '2024-07-25T15:26:27.442Z',
    client: {
      name: 'client_name',
      phone: '79112223344'
    },
    isMnp,
    price: 777,
    delivery: {
      price: 111,
      description: 'delivery_description',
      id: '1111',
      address: 'address',
      geographicСoordinate: {
        latitude: '42',
        longitude: '24'
      }
    },
    simCards: [
      {
        simTypeId: 1,
        msisdn: {
          value: '79112223344',
          price: 300,
          salePrice: 299,
          category: 3
        },
        tariff: {
          id: 1,
          name: 'Black',
          price: 999
        }
      },
      {
        simTypeId: 1,
        msisdn: {
          value: '79112223344',
          price: 300,
          salePrice: 299,
          category: 3
        },
        tariff: {
          id: 1,
          name: 'Black',
          price: 999
        }
      }
    ],
    mnpMsisdn: isMnp ? '79999999999' : null
  });
});

module.exports = router;
