const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
require('./additional');

// Services
const eShopOrderService = require('./services/eshoporder.service');
const simSellService = require('./services/simsell.service');
const simCardService = require('./services/simcard.service');
const documentService = require('./services/document.service');
const pepService = require('./services/pep.service');
const contractService = require('./services/contract.service');
const _DRAFT_SERVICE = require('./services/_DRAFT.service');
const adminShellService = require('./services/adminShell.service');
const personalInfoService = require('./services/personalInfo.service');
const personalDataService = require('./services/personalData.service');
const verificationService = require('./services/verification.service');
const dadataService = require('./services/dadata.service');
const identityDocumentService = require('./services/identityDocument.service');
const crmPersonalInfoService = require('./services/crmPersonalInfo.service');
const changeSimService = require('./services/changeSim.service.js');
const markerService = require('./services/marker.service.js');
const taskService = require('./services/task.service.js');

const app = express();

const PORT = 8080;
const DELAY = 1_500;

app.use(
  cors({
    credentials: true,
    origin: '*'
  })
);
app.use(bodyParser.json());
app.use(morgan('common'));
app.use('/documents', express.static(path.join(__dirname, 'mocks')));

app.use((_, __, next) => {
  setTimeout(() => {
    next();
  }, DELAY);
});

// Proxy
app.use(
  '/b2b/checkabonents',
  createProxyMiddleware({
    target: 'http://localhost:8081',
    on: {
      proxyRes: function (_, req, res) {
        console.log(req.statusCode);
        console.log(res.statusCode);
      }
    }
  })
);

// Service middlewares
app.use('/EShopOrders', eShopOrderService);
app.use('/SimSellService', simSellService);
app.use('/SimCard', simCardService);
app.use('/documentservice', documentService);
app.use('/PepService', pepService);
app.use('/ContractService', contractService);
app.use('/adminShell', adminShellService);
app.use('/PersonalInfoService', personalInfoService);
app.use('/PersonalDataService', personalDataService);
app.use('/VerificationService', verificationService);
app.use('/DadataIntegration', dadataService);
app.use('/identitydocumentsservice', identityDocumentService);
app.use('/CrmPersonalInfoService', crmPersonalInfoService);
app.use('/changesimservice', changeSimService);
app.use('/markerservice', markerService);
app.use('/TaskService', taskService);
app.use('', _DRAFT_SERVICE);

app.get('/test/downloadFile', (_, res) => {
  const file = fs.readFileSync(__dirname + '/mocks/document_mock.pdf');
  var stat = fs.statSync(__dirname + '/mocks/document_mock.pdf');
  res.setHeader('Content-Length', stat.size);
  // res.setHeader("Content-Type", "application/pdf")
  res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
  res.send(file);

  // const fileStream = createReadStream(__dirname + "/mocks/document_mock.pdf");
  // fileStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`);
});
