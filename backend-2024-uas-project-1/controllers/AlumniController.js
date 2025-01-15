const Alumni = require('../models/Alumni');

class AlumniController {
    async index(req, res) {
        const data = await Alumni.getAll();

        if (data.length > 0) {
            res.status(200).json({
                message: 'Get All Resource',
                data,
            });
        } else {
            res.status(200).json({
                message: 'Data is empty',
            });
        }
    }

    async store(req, res) {
        const { name, phone, address, graduation_year, status, company_name, position } = req.body;

        // Validasi manual
        if (!name || !phone || !address || !graduation_year || !status) {
            return res.status(422).json({
                message: 'All fields must be filled correctly',
            });
        }

        const newAlumni = await Alumni.create({
            name,
            phone,
            address,
            graduation_year,
            status,
            company_name,
            position,
        });

        res.status(201).json({
            message: 'Resource is added successfully',
            data: newAlumni,
        });
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedAlumni = await Alumni.update(id, req.body);

        if (updatedAlumni) {
            res.status(200).json({
                message: 'Resource is update successfully',
                data: updatedAlumni,
            });
        } else {
            res.status(404).json({
                message: 'Resource not found',
            });
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const result = await Alumni.delete(id);

        if (result) {
            res.status(200).json({
                message: 'Resource is delete successfully',
            });
        } else {
            res.status(404).json({
                message: 'Resource not found',
            });
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const alumni = await Alumni.find(id);

        if (alumni) {
            res.status(200).json({
                message: 'Get Detail Resource',
                data: alumni,
            });
        } else {
            res.status(404).json({
                message: 'Resource not found',
            });
        }
    }

    async search(req, res) {
        const { name } = req.params;
        const result = await Alumni.search(name);

        if (result.length > 0) {
            res.status(200).json({
                message: 'Get searched resource',
                data: result,
            });
        } else {
            res.status(404).json({
                message: 'Resource not found',
            });
        }
    }

    async freshGraduate(req, res) {
        const result = await Alumni.findByStatus('fresh-graduate');
        res.status(200).json({
            message: 'Get fresh graduate resource',
            total: result.length,
            data: result,
        });
    }

    async employed(req, res) {
        const result = await Alumni.findByStatus('employed');
        res.status(200).json({
            message: 'Get employed resource',
            total: result.length,
            data: result,
        });
    }

    async unemployed(req, res) {
        const result = await Alumni.findByStatus('unemployed');
        res.status(200).json({
            message: 'Get unemployed resource',
            total: result.length,
            data: result,
        });
    }
}

module.exports = new AlumniController();
