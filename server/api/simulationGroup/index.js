'use strict';

var express = require('express');
var controller = require('./simulationGroup.controller');

var router = express.Router();

router.get('/', controller.index2);


module.exports = router;
