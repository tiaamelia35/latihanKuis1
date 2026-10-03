// Mini Project - Pertemuan 6-7: Layer Model

let mahasiswa = [
  {
    id: 1,
    nama: "Andi",
    jurusan: "Sistem Informasi",
    prodiId: 1
  },
  {
    id: 2,
    nama: "Budi",
    jurusan: "Informatika",
    prodiId: 2
  }
];

function getAll() {
   // TODO: kembalikan seluruh data mahasiswa
  return mahasiswa;
}

function getById(id) {
  // TODO: cari & kembalikan satu data berdasarkan id
  return mahasiswa.find((m) => m.id === id);
}

function create(data) {
  // TODO: buat objek baru dengan id = mahasiswa.length + 1,
  const baru = {
    id: mahasiswa.length + 1,
    ...data
  };

  mahasiswa.push(baru);


   // gabungkan dengan `data`, simpan ke array, lalu kembalikan objek baru tsb
  return baru;
}

module.exports = { getAll, getById, create };