const alumniData = []; // Array untuk menampung data alumni (contoh data jika diperlukan).

const getAll = () => alumniData;

const create = (data) => {
    const newAlumni = { id: alumniData.length + 1, ...data };
    alumniData.push(newAlumni);
    return newAlumni;
};

const update = (id, data) => {
    const index = alumniData.findIndex((alumni) => alumni.id === parseInt(id));
    if (index !== -1) {
        alumniData[index] = { ...alumniData[index], ...data };
        return alumniData[index];
    }
    return null;
};

const deleteAlumni = (id) => {
    const index = alumniData.findIndex((alumni) => alumni.id === parseInt(id));
    if (index !== -1) {
        alumniData.splice(index, 1);
        return true;
    }
    return false;
};

const find = (id) => alumniData.find((alumni) => alumni.id === parseInt(id));

const search = (name) => alumniData.filter((alumni) => alumni.name.toLowerCase().includes(name.toLowerCase()));

const findByStatus = (status) => alumniData.filter((alumni) => alumni.status === status);

// export class Alumni
module.exports = { getAll, create, update, delete: deleteAlumni, find, search, findByStatus };
