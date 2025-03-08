const express = require('express');
const { getEvents, createEvent, getEventById } = require('../controller/events.controller')

const router = express.Router();

router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.post('/events', createEvent);

module.exports = router;