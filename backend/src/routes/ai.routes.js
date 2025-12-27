const express = require('express');

const router= express.Router();
const aicontroller = require('../controller/ai.controller');


router.post("/get", aicontroller.getResponse);

module.exports = router;