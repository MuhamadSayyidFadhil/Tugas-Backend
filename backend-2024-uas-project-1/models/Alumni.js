const db = require('../config/database');

class Alumni {
    static getAll() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM alumni';
            db.query(sql, (err, results) => {
                if (err) {
                    console.error("Error fetching all alumni:", err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static create({ name, phone, address, graduation_year, status, company_name, position }) {
        return new Promise((resolve, reject) => {
            const sql =
                'INSERT INTO alumni (name, phone, address, graduation_year, status, company_name, position) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const values = [name, phone, address, graduation_year, status, company_name, position];

            db.query(sql, values, (err, results) => {
                if (err) {
                    console.error("Error inserting alumni:", err);
                    reject(err);
                } else {
                    resolve({
                        id: results.insertId,
                        name,
                        phone,
                        address,
                        graduation_year,
                        status,
                        company_name,
                        position,
                    });
                }
            });
        });
    }

    static update(id, { name, phone, address, graduation_year, status, company_name, position }) {
        return new Promise((resolve, reject) => {
            const sql =
                'UPDATE alumni SET name = ?, phone = ?, address = ?, graduation_year = ?, status = ?, company_name = ?, position = ? WHERE id = ?';
            const values = [name, phone, address, graduation_year, status, company_name, position, id];

            db.query(sql, values, (err, results) => {
                if (err) {
                    console.error("Error updating alumni:", err);
                    reject(err);
                } else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM alumni WHERE id = ?';
            db.query(sql, [id], (err, results) => {
                if (err) {
                    console.error("Error deleting alumni:", err);
                    reject(err);
                } else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM alumni WHERE id = ?';
            db.query(sql, [id], (err, results) => {
                if (err) {
                    console.error("Error finding alumni by ID:", err);
                    reject(err);
                } else {
                    resolve(results[0] || null);
                }
            });
        });
    }

    static search(name) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM alumni WHERE name LIKE ?';
            const searchValue = `%${name}%`;
            db.query(sql, [searchValue], (err, results) => {
                if (err) {
                    console.error("Error searching alumni by name:", err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static findByStatus(status) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM alumni WHERE status = ?';
            db.query(sql, [status], (err, results) => {
                if (err) {
                    console.error("Error finding alumni by status:", err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Alumni;
