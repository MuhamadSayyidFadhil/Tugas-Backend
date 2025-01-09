const db = require('../config/database');

class Student {

    static all() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * from students';

            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }


    static create({ nama, nim, email, jurusan }) {
        return new Promise((resolve, reject) => {
            const sql =
                'INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)';
            const values = [nama, nim, email, jurusan];

            db.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        id: results.insertId,
                        nama,
                        nim,
                        email,
                        jurusan,
                    });
                }
            });
        });
    }
}

module.exports = Student;
