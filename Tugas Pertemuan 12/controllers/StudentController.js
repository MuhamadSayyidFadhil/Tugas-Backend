const Student = require('../models/Student');

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        const data = {
            message: 'Menampilkkan semua students',
            data: students,
        };

        res.json(data);
    }

    async store(req, res) {
        try {
            const { nama, nim, email, jurusan } = req.body;
            const newStudent = await Student.create({
                nama,
                nim,
                email,
                jurusan,
            });

            const data = {
                message: 'Menambahkan data student',
                data: newStudent,
            };

            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan saat menambahkan data student',
                error: error.message,
            });
        }
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: [],
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: `Menghapus student id ${id}`,
            data: [],
        };

        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;
