const express = require('express');
const { createEvent } = require('../controller/events.controller')

const router = express.Router();

router.post('/events', createEvent);

module.exports = router;