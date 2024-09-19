const express = require("express");

const subscriberMinimalInfo = require('../mocks/subscriberMinimalInfo.json')

const router = express.Router();

router.get("/MinimalInfo/GetSubscriber", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.json(subscriberMinimalInfo);
});

module.exports = router;
