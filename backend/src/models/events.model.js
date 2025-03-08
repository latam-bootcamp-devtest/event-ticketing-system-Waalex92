const db = require('../config/db')

class Events {

    static async getEvents() {
        const [rows] = await db.query('SELECT * FROM events');
        return {
            "currentPage": 1,
            "pageSize": 10,
            "totalPages": 3,
            "events": rows
        }
    }

    static async getEventById(id) {
        const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [id]);
        return rows[0];
    }

    static async createEvent(event) {
        const { name, date, available_seats } = event;
        const [result] = await db.query('INSERT INTO events (name, date, available_seats) VALUES (?,?,?)', [name, date, available_seats]);
        return result.insertId;
    }

}

module.exports = Events;