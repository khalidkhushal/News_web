const express = require('express');
const router = express.Router();

// importing other supporting files
const services = require('../services/services');
const controller = require('../controller/contoller');


// app routes
router.get('/', services.home);
router.get('/headlines', services.headlines);
router.get('/sports', services.sports);
router.get('/health', services.health);
router.get('/entertainment', services.entertainment);
router.get('/business', services.business);
router.get('/sci', services.science);
router.get('/tech', services.technology);


module.exports = router;