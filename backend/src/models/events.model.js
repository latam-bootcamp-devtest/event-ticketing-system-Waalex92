const db = require('../config/db')

class Events {
    static async createEvent(event) {
        const { name, date, available_seats } = event;
        const [result] = await db.query('INSERT INTO events (name, date, available_seats) VALUES (?,?,?)', [name, date, available_seats]);
        return result.insertId;
    }

}

module.exports = Events;