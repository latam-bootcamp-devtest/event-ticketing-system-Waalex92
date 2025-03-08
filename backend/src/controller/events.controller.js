const Events = require('../models/events.model');

const getEvents = async (req, res) => {
    const events = await Events.getEvents();
    res.json(events)
}

const createEvent = async (req, res) => {
    const id = await Events.createEvent(req.body);
    res.status(201).json({ id });
}

module.exports = {
    createEvent,
    getEvents
}