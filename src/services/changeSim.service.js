const express = require("express");

const router = express.Router();

router.post("/api/v1/Availability", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json({
        "isAvailable": true,
        "isTele2Selection": false,
        "isB2G": false,
        "isUIS": false,
        "isNotLTE": false
    });
});

module.exports = router;