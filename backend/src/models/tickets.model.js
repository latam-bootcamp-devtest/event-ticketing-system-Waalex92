const db = require('../config/db')

class Tickets {

    static async createEvent(ticket) {
        const { date, available_seats } = event;
        const [result] = await db.query('INSERT INTO events (name, date, available_seats) VALUES (?,?,?)', [name, date, available_seats]);
        return result.insertId;
    }
}

module.exports = Tickets;