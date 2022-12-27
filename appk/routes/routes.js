const express = require('express');
const router = express.Router();

const controller = require('../kafka/Producer')
const concontroller= require('../kafka/Consumer')

router.post('/producer', controller.createProducer)
router.get('/:topic', concontroller.createConsumer)


module.exports = router