const students = require('../data/students');

class StudentController {
    index = (req, res) => {
        res.status(200).json({
            message: 'Daftar mahasiswa berhasil diambil',
            data: students,
        });
    };

    store = (req, res) => {
        const { nama, umur } = req.body;

        if (!nama || !umur) {
            return res.status(400).json({
                message: 'Nama dan umur wajib diisi',
            });
        }

        const newStudent = {
            id: students.length > 0 ? students[students.length - 1].id + 1 : 1, // Handle ID untuk list kosong
            nama,
            umur: parseInt(umur),
        };

        students.push(newStudent);

        res.status(201).json({
            message: 'Data mahasiswa berhasil ditambahkan',
            data: newStudent,
        });
    };

    update = (req, res) => {
        const { id } = req.params;
        const { nama, umur } = req.body;

        const student = students.find((s) => s.id === parseInt(id));

        if (!student) {
            return res.status(404).json({
                message: 'Data mahasiswa tidak ditemukan',
            });
        }

        if (nama) student.nama = nama;
        if (umur) student.umur = parseInt(umur);

        res.status(200).json({
            message: 'Data mahasiswa berhasil diperbarui',
            updatedId: id,
            data: student,
        });
    };

    destroy = (req, res) => {
        const { id } = req.params;

        const studentIndex = students.findIndex((s) => s.id === parseInt(id));

        if (studentIndex === -1) {
            return res.status(404).json({
                message: 'Data mahasiswa tidak ditemukan',
            });
        }

        students.splice(studentIndex, 1);

        res.status(200).json({
            message: 'Data mahasiswa berhasil dihapus',
            deletedId: id,
        });
    };
}

const object = new StudentController();

module.exports = object;
