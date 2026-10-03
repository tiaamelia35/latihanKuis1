// Mini Project - Pertemuan 6-7: Layer Model Dosen

let dosen = [
  {
    id: 1,
    nama: "Dr. Budi",
    nip: "123456",
    prodiId: 1
  },
  {
    id: 2,
    nama: "Dr. Sari",
    nip: "654321",
    prodiId: 2
  }
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((d) => d.id === id);
}

function create(data) {
  const baru = {
    id: dosen.length + 1,
    ...data
  };

  dosen.push(baru);

  return baru;
}

function update(id, data) {
  const index = dosen.findIndex((d) => d.id === id);

  if (index === -1) {
    return null;
  }

  dosen[index] = {
    ...dosen[index],
    ...data,
    id: id
  };

  return dosen[index];
}

module.exports = { getAll, getById, create, update };