const Events = require('../models/events.model');

const getEvents = async (req, res) => {
    const events = await Events.getEvents();
    res.json(events)
}

const getEventById = async (req, res) => {
    const event = await Events.getEventById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
};

const createEvent = async (req, res) => {
    const id = await Events.createEvent(req.body);
    res.status(201).json({ id });
}

module.exports = {
    createEvent,
    getEvents,
    getEventById
}