const express = require('express');
const { createTicket } = require('../controller/tickets.controller')

const router = express.Router();


router.post('/tickets', createTicket);

module.exports = router;