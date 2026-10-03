// Mini Project - Pertemuan 6-7: Layer Controller Prodi

const prodiModel = require("../models/prodiModel");

exports.getAll = (req, res) => {
  const data = prodiModel.getAll();

  res.status(200).json(data);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);

  const data = prodiModel.getById(id);

  if (!data) {
    return res.status(404).json({
      message: "Tidak ditemukan"
    });
  }

  res.status(200).json(data);
};

exports.create = (req, res) => {
  const baru = prodiModel.create(req.body);

  res.status(201).json(baru);
};