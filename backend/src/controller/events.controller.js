const Events = require('../models/events.model');

const createEvent = async (req, res) => {
    const id = await Events.createEvent(req.body);
    res.status(201).json({ id });
}

module.exports = {
    createEvent
}