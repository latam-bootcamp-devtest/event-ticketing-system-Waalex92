const Tickets = require('../models/tickets.model');

const createTicket = async (req, res) => {
    const id = await Tickets.createEvent(req.body);
    res.status(201).json({ id });
}

module.exports = {
    createTicket
}